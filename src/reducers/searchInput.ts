import {SET_SEARCH_INPUT} from '../constants/ActionTypes';
import {AnyAction} from 'redux';

const initialState = '';
export default function searchInput(state: string = initialState, {type, payload}: AnyAction) {
    switch (type) {
        case SET_SEARCH_INPUT: {
            return payload;
        }
        default:
            return state;
    }
}
