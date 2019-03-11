import { combineReducers } from 'redux';
import favsReducer from './favsReducer';

export default combineReducers({
    favs: favsReducer
});