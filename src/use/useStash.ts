import type { ISell } from '../interfaces/ISell';

import { ref } from 'vue'
import type { Ref } from 'vue'

const cells: Ref<ISell | any> = ref([
    { 
        id: 1, 
        item : {
            id: 0,
            color: "#7FAA65",
            colorBlur:"rgba(184, 217, 152, 0.35)",
            count: 1,
        }
    },
    { 
        id: 2, 
        item : {
            id: 0,
            color: "#AA9765",
            colorBlur:"rgba(217, 187, 152, 0.35",
            count: 2,
        }
    },
    { 
        id: 3, 
        item : {
            id: 0,
            color: "#AA9765",
            colorBlur:"rgba(217, 187, 152, 0.35",
            count: 2,
        }
    },
]);

function init () {
    // let cell = getInToLocalStoreJSON();

    // if(cell != null) {
    //     cells.value = JSON.parse(cell);
    //     return;
    // }

    for (let index = 4; index < 26; index++) {
        cells.value.push({ 
            id: index, 
            item : {
                id: 0,
                color: "",
                count: 0,
            }
        })
    }
}
init();

function getCells () {
    return cells.value;
}
function getCellsById () {

}
function getItemsById (cellId: any) : ISell {
    return cells.value.filter(( x:ISell ) => x.id == cellId)[0];
}

function saveInToLocalStore() {
    localStorage.setItem('cells', JSON.stringify(cells.value));
}
function getInToLocalStoreJSON() {
    return localStorage.getItem('cells');
}


export {
    getItemsById,
    getCells,
    saveInToLocalStore
}