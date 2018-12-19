export const CHANGE = "CHANGE";
export const CLEAR = "CLEAR";
export const CHANGE_ASYNC = "CHANGE_ASYNC";
export const TOUGLE_DISABLED = "DISABLED";


export const changeCounter = value => ({  
    type:CHANGE,
    value,
});

export const clearCounter = () => {
    return dispatch =>{
        dispatch({
            type:CLEAR
        })
    }
};

export const tougleDisabled = () => ({
    type:TOUGLE_DISABLED,
});


export const changeCounterAsync = (value) => {
    return dispatch => {
        dispatch(tougleDisabled());
        setTimeout(()=>{
            dispatch(changeCounter(value));
            dispatch(tougleDisabled());
        }, 3000)
    }
}