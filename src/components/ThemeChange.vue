<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import moon from "@/assets/moon.svg";
import sun from "@/assets/sun.svg";
import type { IColorTheme } from "@/interfaces/IColorTheme";
import color from "@/data/color.json";

let theme: Ref<boolean> = ref(true);
let colorTheme = JSON.parse(JSON.stringify(color));
let colorThemeDark: IColorTheme[] = colorTheme.dark;
let colorThemeLight: IColorTheme[] = colorTheme.light;

function onClickChangeTheme(): void {
  if (theme.value == true) {
    setColotTheme(colorThemeLight);
    theme.value = false;
    return;
  }
  setColotTheme(colorThemeDark);
  theme.value = true;
}
function setColotTheme(colorTheme: IColorTheme[]) {
  colorTheme.forEach((themeItem: IColorTheme) => {
    document.body.style.setProperty(themeItem.key, themeItem.color);
  });
}
</script>

<template>
  <div class="theme-change" @click="onClickChangeTheme">
    <div class="theme-change__dark" v-if="theme">
      <img :src="moon" alt="my-logo" />
    </div>
    <div class="dont-active__light" v-else>
      <img :src="sun" alt="my-logo" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.theme-change {
  width: 30px;
  height: 30px;
  position: absolute;
  background-color: aqua;
  z-index: 2;
  bottom: 15px;
  left: 15px;
  border-radius: 50%;

  // &__dark {
  // }
  // &__light {
  // }
}
</style>
