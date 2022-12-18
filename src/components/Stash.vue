<script setup lang="ts">
    import InfoCharacter from './InfoCharacter.vue';
    import StashCell from './StashCell.vue';
    import { getCells } from "../use/useStash"

    let cells : any = getCells();
</script>

<template>
    <div class="stash">
        <InfoCharacter></InfoCharacter> 
        <div class="stash-table">
            <StashCell 
                v-for="cell in cells" 
                :key="cell?.id"
                :cell="cell"
            > 
            </StashCell>
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
    }
</style>
