import reducer from '../currentPage';
import {ActionTypes} from '../../constants/ActionTypes';

const initialState = 1;

describe('results page reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {type: ''}))
            .toEqual(initialState);
    });

    it('should handle SET_CURRENT_PAGE', () => {
        expect(
            reducer(initialState, {
                type: ActionTypes.SET_CURRENT_PAGE,
                payload: 5,
            }),
        )
            .toEqual(5);
    });
});
