//Import the Todo API 
import { TodoApi } from "../api/todoApi"
import *as TodoActions from "../constants/types"


//These are the action types ordered in CRUD Order.

//Create

//The dispatch and getstate function is provided by the Redux-Thunk middleware, we can dispatch actions with it.

export function CreateTodo(todo){
    return (dispatch) => {
        return TodoApi.createTodo(todo).then(res => {
            // console.log("I am in Action ")
            dispatch(CreateTodoSuccess(res.data.data))
        })
    }
}

export function CreateTodoSuccess(todo){
    return {
        type:TodoActions.CREATE_TODO_SUCCESS,
        todo
    }
}


//Read
export function GetTodos(){
    return (dispactch) => {
        return TodoApi.getTodo().then(res => {
            dispactch(GetTodoSuccess(res))
        })
    }
}

export function GetTodoSuccess(todos){
    return {
        type:TodoActions.GET_TODOS_SUCCESS,
        todos
    }
}


//Update
export function StartEditing(id) {
    // console.log("I am in  >StartEditing Action")
    return {
        type: TodoActions.START_EDITING,
        id
    }
}
export function CancelEditing(id) {
    return {
        type: TodoActions.CANCEL_EDITING,
        id
    }
}

export function UpdateTodo(todo) {
    return (dispatch) => {
        
    //Multiple actions can be sent usign the Redux-Thunk middleware
    // console.log("dispatch UPDATE_TODO ")
        dispatch({
            type: TodoActions.UPDATE_TODO,
            todo,
        })
        // console.log("dispatch UPDATE_TODO_SUCCESS ")
        TodoApi.updateTodo(todo).then(res => {
            if (res.status === 204 || res.status === 200){
            dispatch(UpdateTodoSuccess(todo))
            }
        })
    }
}

export function UpdateTodoSuccess(todo) {
    return {
        type: TodoActions.UPDATE_TODO_SUCCESS,
        todo,
        id: todo.id
    }
}


//Delete
export function DeleteTodo(todo) {
    return (dispatch) => {
        dispatch({
            type: TodoActions.DELETE_TODO,
            todo
        })
        TodoApi.removeTodo(todo).then(res => {
            if (res.status === 204 ||  res.status === 200) {
                dispatch(DeleteTodoSuccess(todo))
            }
        })
    }
}

export function DeleteTodoSuccess(todo) {
    return {
        type: TodoActions.DELETE_TODO_SUCCESS,
        todo,
        id: todo.id
    }
}