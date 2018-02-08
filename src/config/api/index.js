import fetchival from 'fetchival';

import apiConfig from './config';

export const fetchApi = (endPoint, payload = {}, method = 'get', headers = {}, queryParams = {}) => {
    return fetchival(`${apiConfig.url}${endPoint}`, {
        headers: {},
    })[method.toLowerCase()](payload)
    .catch((e) => {
        if (e.response && e.response.json) {
            e.response.json().then((json) => {
                if (json) throw json;
                throw e;
            });
        } else {
            throw e;
        }
    });
};