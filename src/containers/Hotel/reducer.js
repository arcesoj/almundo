import {
    HOTEL_FEED_LOADING,
    HOTEL_FEED_FAILED,
    HOTEL_FEED_REFRESHING,
    HOTEL_FEED_SEARCH,
    HOTEL_FEED,
} from './actionsTypes';

const INITIAL_STATE = {
    data: [],
    error: '',
    searchText: '',
    loading: false,
    refreshing: false,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case HOTEL_FEED_LOADING:
            return {...state, loading: true, error: false }
        case HOTEL_FEED_FAILED:
            return {...state, loading: false, refreshing: false, error: 'Error Message' }
        case HOTEL_FEED:
            return {...state, loading: false, refreshing: false, error: '', data: action.payload }
        case HOTEL_FEED_REFRESHING: 
            return {...state, loading: false, refreshing: true, error: '' }
        case HOTEL_FEED_SEARCH: 
            return {...state, searchText: action.payload }
        default:
            return state;
    }
}
