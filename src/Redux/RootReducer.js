import {combineReducers} from 'redux';
import { userReducer } from './Reducer';

const reducers = combineReducers({
    usersData:userReducer
})
export default reducers;