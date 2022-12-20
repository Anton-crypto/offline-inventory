<script setup lang="ts">
import InventoryView from "@/views/InventoryView.vue";
</script>

<template>
  <InventoryView />
</template>

<style lang="scss">
.btn {
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
}
:root {
  --border-item: #4d4d4d;
  --background: #262626;
  --background-item: rgba(255, 255, 255, 0.1);
  --background-gradient-item: linear-gradient(
    90deg,
    #3c3c3c 0%,
    #444444 51.04%,
    #333333 100%
  );
  --background-stash-item: #2f2f2f;
}
</style>
