import { getItemsById, saveInToLocalStore } from "@/use/useStash";
import type { ISell } from '@/interfaces/ISell';
import type { IItem } from '@/interfaces/IItem';

function onDragStart(e: DragEvent, cellIdDrag: String) {
    e.dataTransfer?.setData('cellIdDrag', cellIdDrag.toString())
}
  
  
function onDrop(e: any, cellIdDrop: String) {
    const cellIdDrag = parseInt(e.dataTransfer?.getData('cellIdDrag'));
    if( cellIdDrag != cellIdDrop) {
        let cellDrag: ISell = getItemsById(cellIdDrag);
        let cellDrop: ISell = getItemsById(cellIdDrop);

        if(cellDrag && cellDrop) {
            DropFromSell(cellDrag, cellDrop);
            saveInToLocalStore();
        }
    }
}

function DropFromSell (cellDrag: ISell, cellDrop: ISell) {

    const cellDragItems: IItem = cellDrag.item;
    const cellDropItems: IItem = cellDrop.item;

    const cellDragColor: String = cellDragItems.color;
    const cellDragColorBlur: String = cellDragItems.colorBlur;

    const cellDropColor: String = cellDropItems.color;
    const cellDropColorBlur: String = cellDropItems.colorBlur;


    if(cellDropColor == cellDragColor) {
        cellDropItems.count += cellDropItems.count;

        cellDragItems.color = ""
        cellDragItems.colorBlur = ""

        cellDragItems.count = 0;

        return;
    }

    const cellDragCount: Number = cellDragItems.count;

    cellDragItems.count = cellDropItems.count;
    cellDropItems.count = cellDragCount;

    cellDragItems.color = cellDropColor;
    cellDropItems.color = cellDragColor;

    cellDragItems.colorBlur = cellDropColorBlur;
    cellDropItems.colorBlur = cellDragColorBlur;
}

export {
    onDragStart,
    onDrop
}