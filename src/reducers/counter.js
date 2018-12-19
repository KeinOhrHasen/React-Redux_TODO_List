import {CHANGE, CLEAR, TOUGLE_DISABLED} from "../actions/counter";

const initialState = {value:0, disabled:false};

export default (state=initialState, action) => {
    switch(action.type){
        case CHANGE:
            return{
                ...state, 
                value:state.value + action.value
            }
        case CLEAR:
            return{
                ...state, 
                value: 0,
            }
        case TOUGLE_DISABLED:
            return{
                ...state, 
                disabled: !state.disabled,
            }
        default:return state;
    }
}
