import reducer from 'almundo/src/containers/Hotel/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    hotel: reducer,
})