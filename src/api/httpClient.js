import axios from 'axios' 


//Create a Http Client using Axios. Further modifications in this layer can be done later like Authorization.

const post = (url, userToken, todo = {}) => {
    return axios({ method: 'POST', url: url, headers: {token: userToken},
        data : {
            "title":todo.title,
            "expires_at":todo.date
        }
    })   
}

const get = (url, userToken) => {
    return axios({ method: 'GET', url: url, headers: {token: userToken} })    

}

const put = (url, userToken, todo) => {
    console.log(todo.completed)
    return axios({ method: 'PUT', url: url, headers: {token: userToken},
        data : {
            "title":todo.title,
            "expires_at":todo.date,
            "completed":todo.completed
        }
    })
}

//Cannot contain a delete method - Cause delete is a keyword.

const del = (url, userToken) => {
    return axios({ method: 'DELETE', url: url, headers: {token: userToken}})
}

//Encapsulating in a JSON object

const HttpClient = {
    post,
    get,
    put,
    delete: del
}

export {HttpClient}