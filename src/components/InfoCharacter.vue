<script setup lang="ts">

  let descriptions :any = [
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
  ]
    
</script>

<template>
  <div class="character">
    <div class="character-img"></div>
    <div class="character-description">
      <div 
        class="character-description-item"
        v-for="description in descriptions"
        :key="description?.id"
        :style="`width: ${description.width}px; height: ${description.height}px; margin-top:${description.margin}px;`"
      ></div>
    </div>
  </div>
</template>

<style>
.character {
  box-sizing: border-box;
  background: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 12px;
  padding: 18px 14px;
}
.character-img{
  width: 208px;
  height: 240px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  border-radius: 8px;
}
.character-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: stretch;
  justify-content: flex-start;
}
.character-description-item {
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  border-radius: 8px;
}
</style>