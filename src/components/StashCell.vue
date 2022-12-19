<script setup lang="ts">

  import StashItem from "./StashItem.vue";
  import { onDragStart, onDrop } from "@/use/useDragAndDrop";

  import type { ISell } from '../interfaces/ISell';
  
  
  const props: any = defineProps<{
    cell: ISell,
  }>();

</script>

<template>
  <div 
    class="stash-cell droppable"
    @drop="onDrop($event, props.cell.id)"
    @dragover.prevent
    @dragenter.prevent
  >
      <StashItem
        v-if="props.cell.item.count > 0"     
        @dragstart="onDragStart($event, props.cell.id)"  
        draggable="true"
        :itemCell="props.cell.item"
      >
      </StashItem>
  </div>
</template>

<style scoped lang="scss">
    .stash-cell {
        width: 104px;
        height: 99px;
        border-bottom: 1px solid #4D4D4D;
        border-right: 1px solid #4D4D4D;
        background: transparent;
    }
    .stash-cell:nth-child(25) {
      border-radius: 12px 0px 0px 0px;
    }
    .stash-cell:nth-child(5n) {
        border-bottom: none;
    }
    .stash-cell:nth-last-child(-n+5) {
      border-right: none;
    }
</style>
