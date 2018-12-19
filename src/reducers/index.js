import { combineReducers } from "redux";
import  counter from "./counter";
import  itemsData from "./item";
//  to avoind naming conflicts - rename reducer to formReducer
import {reducer as formReducer} from "redux-form";
// add auth reducers
import authReducer from "./authReducer";
import errorReducer from './errorReducer';
// add TodoReducer
import {TodoListReducer} from './todoReducer'



export default combineReducers({
    counter,
    itemsData,
    form:formReducer,
    authReducer,
    errorReducer,
    todos:TodoListReducer,

});