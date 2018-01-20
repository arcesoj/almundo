import { createSelector } from 'reselect';

const filteredItems = (state, searchText) => {
	if(searchText.trim().length > 0){
		const items = state.hotel.data;
		return items.filter((item) => item.name.includes(searchText));
	}
	return state.hotel.data;
}

export {
	filteredItems
};