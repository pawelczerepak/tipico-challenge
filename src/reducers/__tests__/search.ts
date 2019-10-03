import reducer from '../search';
import {ActionTypes} from '../../constants/ActionTypes';

const initialState = {
    totalCount: null,
    params: {},
    pages: {},
    error: null,
};

describe('search reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {type: ''}))
            .toEqual(initialState);
    });

    it('should handle SEARCH_REPOSITORIES', () => {
        const params = {
            query: 'query',
            page: 1,
            order: 'desc',
            sort: 'stars',
        };
        expect(
            reducer(initialState, {
                type: ActionTypes.SEARCH_REPOSITORIES,
                meta: {
                    params,
                },
            }),
        )
            .toEqual({
                ...initialState,
                params,
                totalCount: 0,
            });
    });

    it('should handle SEARCH_REPOSITORIES_SUCCESS', () => {
        const params = {
            query: 'query',
            page: 1,
            order: 'desc',
            sort: 'stars',
        };
        // tslint:disable:object-literal-key-quotes quotemark trailing-comma
        const items = [
            {
                "full_name": "chvin/react-tetris",
                "owner": {
                    "login": "chvin",
                    "avatar_url": "https://avatars2.githubusercontent.com/u/5383506?v=4",
                    "url": "https://api.github.com/users/chvin",
                },
                "description": "Use React, Redux, Immutable to code Tetris. 🎮",
                "url": "https://api.github.com/repos/chvin/react-tetris",
                "stargazers_count": 5592,
                "language": "JavaScript",
            },
        ];
        // tslint:enable
        const totalCount = 1;
        expect(
            reducer({...initialState, params}, {
                type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
                meta: {
                    previousAction: {
                        meta: {
                            params,
                        },
                    },
                },
                payload: {
                    data: {
                        total_count: totalCount,
                        items,
                    },
                },
            }),
        )
            .toEqual({
                ...initialState,
                params,
                pages: {
                    1: items,
                },
                totalCount,
            });
    });

    it('should handle SEARCH_REPOSITORIES_FAIL', () => {
        const error = new Error('error');
        expect(
            reducer(initialState, {
                type: ActionTypes.SEARCH_REPOSITORIES_FAIL,
                error,
            }),
        )
            .toEqual({
                ...initialState,
                error,
            });
    });
});
