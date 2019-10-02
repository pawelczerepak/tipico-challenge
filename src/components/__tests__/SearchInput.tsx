import React from 'react';
import '../../setupTests';
import ConnectedSearchInput from '../SearchInput';
import {mockStore} from '../../setupTests';
import {Provider} from 'react-redux';
import {MockStoreEnhanced} from 'redux-mock-store';
import renderer from 'react-test-renderer';

describe('SearchInput', () => {
    let store: MockStoreEnhanced<unknown, {}>;
    beforeEach(() => {
        store = mockStore({searchInput: 'test'});
    });

    it('capture snapshot', () => {
        store = mockStore({searchInput: 'test'});
        expect(renderer.create(<Provider store={store}><ConnectedSearchInput/></Provider>).toJSON()).toMatchSnapshot();
    });
});
