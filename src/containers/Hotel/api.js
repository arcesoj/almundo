import { fetchApi } from 'almundo/src/config/api';

const endPoints = {
	getHotelsList: 'hotels/',
};

export const getAll = payload => fetchApi(endPoints.getHotelsList, payload, 'get');