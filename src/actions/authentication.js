import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "../constants/types";
import {API_BASE} from "../constants/API"

const AUTH_API = `${API_BASE}/users`

export const registerUser = (user, history) => dispatch => {
    axios.post(`${AUTH_API}/sign_up`, user)
            .then(res => {
                history.push('/login')})
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginUser = (user, history) => dispatch => {
    axios.post(`${AUTH_API}/sign_in`, user)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('token', token);
                dispatch(setCurrentUser(token));
                history.push("/todos")
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const setCurrentUser = token => {
    return {
        type: SET_CURRENT_USER,
        payload: token
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('token');
    dispatch(setCurrentUser({}));
    history.push('/login');
}
