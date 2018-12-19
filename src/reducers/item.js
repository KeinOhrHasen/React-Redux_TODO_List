import {FETCH_ITEM, FETCH_ALL_ITEMS} from "../actions/items";

const initialState = {
  items: [],
  items_ids: [],
  current: null,
  currentId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_ITEMS: {
      const ids = action.payload.map(i => i.id);
      return {
        ...state,
        items: action.payload,
        items_ids: ids,
      };
    }
    case FETCH_ITEM:
      return {
        ...state,
        currentId: action.id,
        current: action.payload,
      };
    default: return state;
  }
}