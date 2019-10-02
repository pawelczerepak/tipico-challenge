import {SET_SEARCH_INPUT} from '../constants/ActionTypes';

export const setSearchInput = (query: string) => ({
    type: SET_SEARCH_INPUT,
    payload: query,
});
