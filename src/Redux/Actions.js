import { ActionTypes } from './Constants'

export const setUsers  = (users) =>{
    return{
        type:ActionTypes.GET_USERS,
        payload:users
    }
}

export const getLoginUser  = (user) =>{
    return{
        type:ActionTypes.GET_LOGIN_USER,
        payload:user
    }
}
