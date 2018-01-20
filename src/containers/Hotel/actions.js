import {
    HOTEL_FEED,
	HOTEL_FEED_FAILED,
	HOTEL_FEED_LOADING,
	HOTEL_FEED_SEARCH,
	HOTEL_FEED_REFRESHING,
} from './actionsTypes';

import * as api from './api';

export const getAllHotels = () => {
	return (dispatch) => {
		dispatch({ type: HOTEL_FEED_LOADING });
		this.requestToHotels(dispatch);
	}
}

export const refreshHotelList = () => {
	return (dispatch) => {
		dispatch({ type: HOTEL_FEED_REFRESHING });
		this.requestToHotels(dispatch);
	}
}

export const searchHotel = (text) => {
	return (dispatch) => {
		dispatch({ type: HOTEL_FEED_SEARCH, payload: text });
	}
}

requestToHotels = (dispatch) => {
	api.getAll()
	.then((responseJson) => {
		console.log(responseJson)
		if(responseJson) {
			dispatch({ type: HOTEL_FEED, payload: responseJson});
		} else {
			dispatch({ type: HOTEL_FEED_FAILED});
		}
	})
	.catch((error) => {
		dispatch({ type: HOTEL_FEED_FAILED});
	});
}
