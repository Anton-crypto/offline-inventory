<script setup lang="ts">
    import InfoCharacter from './InfoCharacter.vue';
    import StashMenu from './StashMenu.vue';
    import StashCell from './StashCell.vue';
    import { ref } from "vue"

    import { getCells } from "../use/useStash"

    import type { ISell } from '@/interfaces/ISell';

    let cells : ISell[] = getCells();

    let openStashMenu = ref(false);

    let cellOpenMenu = ref({})

    function onClickOpenStashMenu(cell : ISell) {
        cellOpenMenu.value = cell;
        openStashMenu.value = !openStashMenu.value;
    }
    function notOpenMenu() {
        openStashMenu.value = !openStashMenu.value;
    }
</script>

<template>
    <div>
        <div class="stash">
            <InfoCharacter></InfoCharacter> 
            <div class="stash-table">
                <StashCell 
                    v-for="cell in cells" 
                    :key="cell?.id"
                    :cell="cell"
                    @click="onClickOpenStashMenu(cell)"
                > 
                </StashCell>
                <div class="menu" v-if="openStashMenu">
                    <StashMenu
                        :cell = "cellOpenMenu"
                        @notOpenMenu = "notOpenMenu"
                    ></StashMenu>
                </div>
            </div>
        </div>
        <div class="bottom-info">
            <div class="bottom-bar"></div>
            <div class="cross">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z" fill="white"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"> 
    .stash {
        display: flex;
        justify-content: space-between;
    }
    .character {
        margin-right: 20px;
    }
    .stash-table {
        background: #262626;
        border: 1px solid #4D4D4D;
        border-radius: 12px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 525px;
        height: 500px;
        flex-wrap: wrap;
        overflow: hidden;
        position: relative;
    }
    .menu {
        width: 250px;
        height: 100%;
        position: absolute;
        right: 0;
    }
    .bottom-info {
        width: 100%;
        height: 72px;
        background: #262626;
        border: 1px solid #4D4D4D;
        border-radius: 12px;
        margin-top: 24px;
        position: relative;
    }
    .bottom-bar {
        background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
        border-radius: 12px;
        margin: 18px 68px 18px 18px;
        height: 36px;

    }
    .cross {
        position: absolute;
        top: 14px;
        right: 14px;
    }
</style>
