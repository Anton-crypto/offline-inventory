<script setup lang="ts">
import type { IItem } from "@/interfaces/IItem";

const props: any = defineProps<{
  itemCell: IItem;
}>();
</script>

<template>
  <div class="stash-item">
    <div
      class="stash-item__static"
      :style="`background: ${props.itemCell.color};`"
    ></div>
    <div
      class="stash-item__phantom"
      :style="`background: ${props.itemCell.colorBlur};`"
    ></div>
    <div class="stash-item__count">{{ props.itemCell.count }}</div>
  </div>
</template>

<style scoped lang="scss">
.stash-item {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--background-stash-item);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: grab;

  &__static {
    width: 48px;
    height: 48px;
  }
  &__phantom {
    position: absolute;
    width: 48px;
    height: 48px;
    backdrop-filter: blur(6px);
    transform: translate(6px, -6px);
  }
  &__count {
    position: absolute;
    bottom: 0;
    right: -1px;
    background: var(--background);
    border: 1px solid var(--border-item);
    border-radius: 6px 0px 0px 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #ffffff;
    opacity: 0.4;
    padding: 4px;
  }
}
</style>
