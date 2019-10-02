import {searchInput} from '../searchInput';

const state = {
    searchInput: 'test',
};

it('returns searchInput string', () => {
    expect(searchInput(state)).toEqual('test');
});
