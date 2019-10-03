import {getSearchInput} from '../getSearchInput';

const state = {
    searchInput: 'test',
};

it('returns searchInput string', () => {
    expect(getSearchInput(state)).toEqual('test');
});
