import {getCurrentPage, getError, getLoadedPages, getPage, getPageCount, getTotalCount} from '../results';
import {MAX_ACCESSIBLE_RESULTS, RESULTS_PER_PAGE} from '../../constants/search';

const state = {
    currentPage: 2,
    search: {
        totalCount: 2000,
        pages: {
            2: [{full_name: 'repo'}],
        },
        error: new Error(),
    },
};

describe('results selectors', () => {
    it('returns total count', () => {
        expect(getTotalCount(state)).toEqual(2000);
    });
    it('returns page count', () => {
        expect(getPageCount(state)).toEqual(Math.ceil(MAX_ACCESSIBLE_RESULTS / RESULTS_PER_PAGE));
    });
    it('returns page items', () => {
        expect(getPage(state, 2)).toEqual([{full_name: 'repo'}]);
    });
    it('returns error', () => {
        expect(getError(state)).toBeInstanceOf(Error);
    });
    it('returns current page', () => {
        expect(getCurrentPage(state)).toEqual(2);
    });
    it('returns loaded pages', () => {
        expect(getLoadedPages(state)).toEqual([2]);
    });
});
