import reducer from '../search';
import {SEARCH_REPOSITORIES, SEARCH_REPOSITORIES_FAIL, SEARCH_REPOSITORIES_SUCCESS} from '../../constants/ActionTypes';

const initialState = {
    totalCount: 0,
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
            resultsPerPage: 10,
            page: 1,
            order: 'desc',
            sort: 'stars',
        };
        expect(
            reducer(initialState, {
                type: SEARCH_REPOSITORIES,
                meta: {
                    params,
                },
            }),
        )
            .toEqual({
                ...initialState,
                params,
            });
    });

    it('should handle SEARCH_REPOSITORIES_SUCCESS', () => {
        const params = {
            query: 'query',
            resultsPerPage: 10,
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
                type: SEARCH_REPOSITORIES_SUCCESS,
                meta: {
                    params,
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
                type: SEARCH_REPOSITORIES_FAIL,
                error,
            }),
        )
            .toEqual({
                ...initialState,
                error,
            });
    });
});
