<script setup lang="ts">
let descriptions: any = [
  {
    id: 1,
    width: 190,
    height: 26,
    margin: 24,
  },
  {
    id: 2,
    width: 155,
    height: 10,
    margin: 16,
  },
  {
    id: 3,
    width: 155,
    height: 10,
    margin: 16,
  },
  {
    id: 4,
    width: 160,
    height: 10,
    margin: 16,
  },
  {
    id: 5,
    width: 140,
    height: 10,
    margin: 16,
  },
  {
    id: 6,
    width: 80,
    height: 10,
    margin: 16,
  },
];
</script>

<template>
  <div class="character">
    <div class="character__img"></div>
    <div class="character__description">
      <div
        class="character__description-item"
        v-for="description in descriptions"
        :key="description?.id"
        :style="`width: ${description.width}px; height: ${description.height}px; margin-top:${description.margin}px;`"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.character {
  box-sizing: border-box;
  background: var(--background);
  border: 1px solid var(--border-item);
  border-radius: 12px;
  padding: 18px 14px;
  &__img {
    width: 208px;
    height: 240px;
    background: var(--background-item);
    backdrop-filter: blur(6px);
    border-radius: 8px;
  }
  &__description {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: stretch;
    justify-content: flex-start;
    &-item {
      background: var(--background-gradient-item);
      border-radius: 8px;
    }
  }
}
</style>
