<script setup lang="ts">
import InfoCharacter from "./InfoCharacter.vue";
import StashMenu from "./StashMenu.vue";
import StashCell from "./StashCell.vue";
import { ref } from "vue";

import { getCells } from "../use/useStash";

import type { ISell } from "@/interfaces/ISell";

let cells: ISell[] = getCells();
let openStashMenu = ref(false);
let cellOpenMenu = ref({} as ISell);

let oldCellId: Number = -1;

function onClickOpenStashMenu(cell: ISell) {
  if (
    (oldCellId == cell.id || cell.item.count == 0) &&
    openStashMenu.value == true
  ) {
    openStashMenu.value = false;
  } else {
    openStashMenu.value = true;
  }
  oldCellId = cell.id;
  cellOpenMenu.value = cell;
}
function onClickCloseMenu() {
  openStashMenu.value = !openStashMenu.value;
}
</script>

<template>
  <div>
    <div class="stash">
      <InfoCharacter class="stash__character"></InfoCharacter>
      <div class="stash__table">
        <StashCell
          v-for="cell in cells"
          :key="cell?.id"
          :cell="cell"
          @click="onClickOpenStashMenu(cell)"
        >
        </StashCell>
        <div class="stash__menu" v-if="openStashMenu">
          <StashMenu
            :cell="cellOpenMenu"
            @onClickCloseMenu="onClickCloseMenu"
          ></StashMenu>
        </div>
      </div>
    </div>
    <div class="stash__bottom">
      <div class="stash__bottom__bar"></div>
      <div class="stash__bottom__cross">
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
  &__character {
    margin-right: 20px;
  }
  &__table {
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
  &__menu {
    width: 250px;
    height: 100%;
    position: absolute;
    right: 0;
  }
  &__bottom {
    width: 100%;
    height: 72px;
    background: #262626;
    border: 1px solid #4D4D4D;
    border-radius: 12px;
    margin-top: 24px;
    position: relative;
    &__bar {
      background: linear-gradient(
        90deg,
        #3c3c3c 0%,
        #444444 51.04%,
        #333333 100%
      );
      border-radius: 12px;
      margin: 18px 68px 18px 18px;
      height: 36px;
    }
    &__cross {
      position: absolute;
      top: 14px;
      right: 14px;
    }
  }
}
</style>
