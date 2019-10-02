import {AxiosAction, Params, Response} from '../types';
import {SEARCH_REPOSITORIES, SEARCH_REPOSITORIES_FAIL, SEARCH_REPOSITORIES_SUCCESS} from '../constants/ActionTypes';

const initialState = {
    totalCount: 0,
    params: {},
    pages: {},
    error: null,
};
export default function search(state: any = initialState, {type, payload, error, meta}: AxiosAction) {
    switch (type) {
        case SEARCH_REPOSITORIES: {
            const {params}: { params: Params } = meta;
            return ({
                ...state,
                params,
                pages: state.params.query !== params.query ? {} : state.pages,
                error: null,
                totalCount: 0,
            });
        }
        case SEARCH_REPOSITORIES_SUCCESS: {
            const {data}: { data: Response } = payload;
            const {params}: { params: Params } = meta;

            return ({
                ...state,
                pages: {
                    ...state.pages,
                    [params.page]: data.items,
                },
                totalCount: data.total_count,
            });
        }
        case SEARCH_REPOSITORIES_FAIL: {
            return ({
                ...state,
                error,
            });
        }
        default:
            return state;
    }
}
