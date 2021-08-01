import { ActionTypes } from './Constants';

const initialState = {
    users:[],
    user:{}
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_USERS:
            return {...state,users:payload};
            case ActionTypes.GET_LOGIN_USER:
                return{...state,user:payload}
        default:
            return state;
    }
}
