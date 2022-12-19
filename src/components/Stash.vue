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
</template>

<style scoped> 
    .stash {
        display: flex;
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
</style>
