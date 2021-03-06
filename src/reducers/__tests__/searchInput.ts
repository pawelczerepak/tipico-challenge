import reducer from '../searchInput';
import {ActionTypes} from '../../constants/ActionTypes';

const initialState = '';

describe('search input reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {type: ''}))
            .toEqual(initialState);
    });

    it('should handle SET_SEARCH_INPUT', () => {
        expect(
            reducer(initialState, {
                type: ActionTypes.SET_SEARCH_INPUT,
                payload: 'query',
            }),
        )
            .toEqual('query');
    });
});
