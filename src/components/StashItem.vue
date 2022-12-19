<script setup lang="ts">
    import type { IItem } from '../interfaces/IItem';

    const props: any = defineProps<{
        itemCell: IItem,
    }>();

</script>

<template>
    <div class="item">
        <div class="item-static" :style="`background: ${ props.itemCell.color };`"></div>
        <div class="item-phantom" :style="`background: ${ props.itemCell.colorBlur };`"></div>
        <div class="item-count"> {{ props.itemCell.count }}</div>
    </div>
</template>

<style scoped>
    .item {
        position: relative;
        width: 100%;
        height: 100%;
        background: #2F2F2F;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .item-static{
        width: 48px;
        height: 48px;
    }
    .item-phantom {
        position: absolute;
        width: 48px;
        height: 48px;
        backdrop-filter: blur(6px);
        transform: translate(6px, -6px);
    }
</style>
