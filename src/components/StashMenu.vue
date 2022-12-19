<script setup lang="ts">
import type { ISell } from "../interfaces/ISell";
import { deleteCell, addCell, getRandomInt } from "@/use/useStash";
import { ref } from "vue";

let countNewCell = ref(0);

const props: any = defineProps<{
  cell: ISell;
}>();

const emit = defineEmits(["onClickCloseMenu"]);

function onClickDeleteCell (cell: ISell) {
  deleteCell(cell.id);
  onClickCloseMenu();
}
function onClickCreateCellItem(cell: ISell) {
  addCell(countNewCell.value, cell.id, color);
  onClickCloseMenu();
}
function onClickCloseMenu() {
  emit("onClickCloseMenu");
}

function setStyleImgColor(colorCellItem: String) {
  return `background: ${colorCellItem};`;
}

function setStyleImgColorBlur(colorCellItem: String) {
  return `background: rgba(${colorCellItem});`;
}
function setStyleImgColorNew(colorCellItem: String) {
  return `background: rgba(${colorCellItem});`;
}
function setStyleImgColorBlurNew(colorCellItem: String) {
  return `background: rgba(${colorCellItem}, 0.35);`;
}

let descriptions: any = [
    {
    id: 1,
    width: 190,
    height: 26,
    margin: 0,
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

let color: string = `
  ${getRandomInt(255)}, 
  ${getRandomInt(255)}, 
  ${getRandomInt(255)}`;
</script>

<template>
  <div class="menu">
    <div class="menu__img">
      <div
        class="menu__img-static"
        :style="
          cell.item.count > 0
            ? setStyleImgColor(props.cell.item.color)
            : setStyleImgColorNew(color)
        "
      ></div>
      <div
        class="menu__img-phantom"
        :style="
          cell.item.count > 0
            ? setStyleImgColorBlur(props.cell.item.colorBlur)
            : setStyleImgColorBlurNew(color)
        "
      ></div>
    </div>
    <div class="menu__description">
      <div
        class="menu__description-item"
        v-for="description in descriptions"
        :key="description?.id"
        :style="`width: ${description.width}px; height: ${description.height}px; margin-top:${description.margin}px;`"
      ></div>
    </div>
    <div class="menu-active">
      <div
        v-if="cell.item.count > 0"
        @click="onClickDeleteCell(cell)"
        class="del-cell btn"
      >
        <span>Удалить предмет</span>
      </div>
      <div v-else>
        <div class="add-input">
          <input type="text" v-model="countNewCell" />
        </div>
        <div class="add-active">
          <div @click="onClickCloseMenu()" class="not-open btn">
            <span>Отмена</span>
          </div>
          <div @click="onClickCreateCellItem(cell)" class="create-cell btn">
            <span>Подтвердить</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  background: rgba(38, 38, 38, 0.5);
  border-left: 1px solid #4D4D4D;
  backdrop-filter: blur(8px);
  height: 100%;

  &__description {
    border-bottom: 1px solid #4D4D4D;
    padding-bottom: 20px;
    margin-bottom: 15px;
    margin-left: 20px;
    margin-right: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: stretch;
    justify-content: flex-start;
    &-item {
      background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
      border-radius: 8px;
    }
  }

  &__img {
    height: 215px;
    margin: 0px 20px;
    border-bottom: 1px solid #4D4D4D;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-content: space-between;
    align-items: center;

    &-static {
      width: 115.56px;
      height: 115.56px;
    }
    &-phantom {
      position: absolute;
      width: 115.56px;
      height: 115.56px;
      backdrop-filter: blur(12px);
      transform: translate(15px, -15px);
    }
  }
  &-active {
    margin: 0 auto;
    width: 100%;
    padding: 20px;
    position: absolute;
    bottom: 0px;
    background: rgba(38, 38, 38, 0.6);
    border-top: 1px solid #4D4D4D;
    backdrop-filter: blur(8px);
  }
}
.del-cell {
  height: 39px;
  background: #FA7272;
  border-radius: 8px;

  text-align: center;
  vertical-align: inherit;
  height: 100%;
  padding: 10px;
  color: #FFFFFF;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
}
.add-active {
  display: flex;
  justify-content: space-between;
}
.not-open {
  background: #FFFFFF;
  border-radius: 8px;
  font-size: 14px;
  line-height: 17px;
  color: #2D2D2D;
  width: 88px;
  height: 33px;
  cursor: pointer;

  height: 100%;
  padding: 10px;
  text-align: center;
}
.create-cell {
  height: 39px;
  background: #FA7272;
  border-radius: 8px;

  text-align: center;
  vertical-align: inherit;
  height: 100%;
  padding: 10px;
  color: #FFFFFF;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
}
.add-input input {
  box-sizing: border-box;
  width: 210px;
  height: 40px;
  background: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 4px;
  color: #FFFFFF;
}
.add-input {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
