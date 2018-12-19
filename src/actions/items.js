import ItemsService from "../services/ItemsService";

export const FETCH_ALL_ITEMS = "FETCH_ALL_ITEMS";
export const FETCH_ITEM = "GETCH_ITEMS";

export const  fetchAllItems = (item) => dispatch =>{
    return ItemsService.getAll()
    .then(items => {
        dispatch ({
            type:FETCH_ALL_ITEMS,
            payload:items.data,
        })
    })
};

export const  fetchItem = (id) => (dispatch, getState) => {
    const {itemsData: {items, item_ids}} = getState();
    const itemId = item_ids.indexOf(id);
    if (itemId !== -1){
        return dispatch({
            type:FETCH_ITEM,
            payload:items[itemId],
            id:itemId,
        })
    }
    return ItemsService.getOne(id)
    .then((item)=> dispatch({
        type:FETCH_ITEM,
        payload:item.data,
        id:item.id,
    }))
}