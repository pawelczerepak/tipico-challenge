import {Params} from '../types';
import {defaults} from 'lodash';
import {SEARCH_REPOSITORIES} from '../constants/ActionTypes';

export const searchRepositories = (options: Partial<Params>) => {
    const opts: Params = defaults(options, {
        sort: 'stars',
        order: 'desc',
        page: 1,
        resultsPerPage: 10,
    }) as Params;

    return ({
        type: SEARCH_REPOSITORIES,
        payload: {
            request: {
                url: '/search/repositories',
                params: {
                    q: opts.query,
                    sort: opts.sort,
                    order: opts.order,
                    page: opts.page,
                    per_page: opts.resultsPerPage,
                },
            },
        },
        meta: {
            params: opts,
        },
    });
};
