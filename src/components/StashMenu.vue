<script setup lang="ts">
    import type { ISell } from '../interfaces/ISell';
    import { deleteCell, addCell, getRandomInt } from "@/use/useStash";
    import { ref } from 'vue'

    let countNewCell = ref(0);

    const props: any = defineProps<{
        cell: ISell,
    }>();

    const emit = defineEmits(['notOpenMenu'])

    function onClickDeleteCell (cell: ISell) {
        deleteCell(cell.id);
        emit('notOpenMenu');
    }

    function onClickCreateCellItem (cell: ISell) {
        addCell(countNewCell, cell.id, color);
        emit('notOpenMenu');
    }

    let descriptions :any = [
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
    ]

    let color: string = `${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)}`
</script>

<template>
    <div class="menu">
        <div class="menu-img" v-if="cell.item.count > 0">
            <div class="menu-img-static" :style="`background: ${ props.cell.item.color };`"></div>
            <div class="menu-img-phantom" :style="`background: ${ props.cell.item.colorBlur };`"></div>
        </div>
        <div class="menu-img" v-else>
            <div class="menu-img-static" :style="`background: rgba(${color});`"></div>
            <div class="menu-img-phantom" :style="`background: rgba(${color}, 0.35);`"></div>
        </div>
        <div class="menu-description">
            <div 
                class="menu-description-item"
                v-for="description in descriptions"
                :key="description?.id"
                :style="`width: ${description.width}px; height: ${description.height}px; margin-top:${description.margin}px;`"
            ></div>
        </div>
        <div class="menu-active">
            <div v-if="cell.item.count > 0" @click="onClickDeleteCell(cell)" class="del-cell btn">
                <span>Удалить предмет</span>
            </div>
            <div v-else>
                <div class="add-input">
                    <input type="text" v-model="countNewCell">
                </div>
                <div class="add-active">
                    <div @click="emit('notOpenMenu');" class="not-open btn">
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

        &-description {
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

        &-img {
            height: 215px;
            margin: 20px;
            border-bottom: 1px solid #4D4D4D;
            box-sizing: border-box;
            display: flex;
            justify-content: space-around;
            align-content: space-between;
            align-items: center;

            &-static{
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
    .add-input input{
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
