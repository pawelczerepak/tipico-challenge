import {ActionTypes} from '../constants/ActionTypes';
import {AnyAction} from 'redux';

const initialState = 1;
export default function currentPage(state: number = initialState, {type, payload}: AnyAction) {
    switch (type) {
        case ActionTypes.SET_CURRENT_PAGE: {
            return payload;
        }
        default:
            return state;
    }
}
