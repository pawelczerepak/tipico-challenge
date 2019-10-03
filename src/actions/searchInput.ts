import {ActionTypes} from '../constants/ActionTypes';

export const setSearchInput = (query: string) => ({
    type: ActionTypes.SET_SEARCH_INPUT,
    payload: query,
});
