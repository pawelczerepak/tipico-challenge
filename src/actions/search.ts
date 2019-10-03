import {Params} from '../types';
import {defaults} from 'lodash';
import {ActionTypes} from '../constants/ActionTypes';
import {RESULTS_PER_PAGE} from '../constants/search';

export const searchRepositories = (options: Partial<Params>) => {
    const opts: Params = defaults(options, {
        sort: 'stars',
        order: 'desc',
        page: 1,
    }) as Params;

    return ({
        type: ActionTypes.SEARCH_REPOSITORIES,
        payload: {
            request: {
                url: '/search/repositories',
                params: {
                    q: opts.query,
                    sort: opts.sort,
                    order: opts.order,
                    page: opts.page,
                    per_page: RESULTS_PER_PAGE,
                },
            },
        },
        meta: {
            params: opts,
        },
    });
};
