import reducer from '../searchInput';
import {SET_SEARCH_INPUT} from '../../constants/ActionTypes';

const initialState = '';

describe('search input reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {type: ''}))
            .toEqual(initialState);
    });

    it('should handle SEARCH_INPUT', () => {
        expect(
            reducer(initialState, {
                type: SET_SEARCH_INPUT,
                payload: 'query',
            }),
        )
            .toEqual('query');
    });
});
