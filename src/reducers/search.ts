import {AxiosFailAction, AxiosSuccessAction, Params, Response} from '../types';
import {AnyAction} from 'redux';
import {ActionTypes} from '../constants/ActionTypes';

const initialState = {
    totalCount: null,
    params: {},
    pages: {},
    error: null,
};
export default function search(state: any = initialState, action: AnyAction) {
    switch (action.type) {
        case ActionTypes.SEARCH_REPOSITORIES: {
            const {meta} = action as AnyAction;
            const {params}: { params: Params } = meta;
            const differentQuery = state.params.query !== params.query;
            return ({
                ...state,
                params,
                pages: differentQuery ? {} : state.pages,
                error: null,
                totalCount: differentQuery ? 0 : state.totalCount,
            });
        }
        case ActionTypes.SEARCH_REPOSITORIES_SUCCESS: {
            const {payload, meta} = action as AxiosSuccessAction;
            const {data}: { data: Response } = payload;
            const {params}: { params: Params } = meta.previousAction.meta;

            return ({
                ...state,
                pages: {
                    ...state.pages,
                    [params.page]: data.items,
                },
                totalCount: data.total_count,
            });
        }
        case ActionTypes.SEARCH_REPOSITORIES_FAIL: {
            const {error} = action as AxiosFailAction;
            return ({
                ...state,
                error,
            });
        }
        default:
            return state;
    }
}
