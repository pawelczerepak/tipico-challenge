import {ActionTypes} from '../constants/ActionTypes';

export const setCurrentPage = (page: number) => ({
    type: ActionTypes.SET_CURRENT_PAGE,
    payload: page,
});
