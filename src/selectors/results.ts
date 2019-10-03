import {get} from 'lodash';
import {MAX_ACCESSIBLE_RESULTS, RESULTS_PER_PAGE} from '../constants/search';

export const getTotalCount = (state: any) => {
    return get(state, 'search.totalCount', null);
};

export const getPageCount = (state: any) => {
    const totalCount = getTotalCount(state);
    return totalCount === null ? 0 : Math.ceil(Math.min(MAX_ACCESSIBLE_RESULTS, totalCount) / RESULTS_PER_PAGE);
};

export const getPage = (state: any, page: number) => {
    return get(state, `search.pages.${page}`, []);
};

export const getError = (state: any) => {
    return get(state, `search.error`, null);
};

export const getCurrentPage = (state: any) => {
    return get(state, `currentPage`, 1);
};

export const getLoadedPages = (state: any) => {
    return Object.keys(get(state, `search.pages`, {})).map((i) => parseInt(i, 10));
};
