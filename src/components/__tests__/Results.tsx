import React from 'react';
import '../../setupTests';
import toJson from 'enzyme-to-json';
import ConnectedResults from '../Results';
import {MockStoreEnhanced} from 'redux-mock-store';
import {mockStore} from '../../setupTests';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';

describe('Results', () => {
    let store: MockStoreEnhanced<unknown, {}>;
    beforeEach(() => {
        store = mockStore({});
    });

    it('capture snapshot', () => {
        expect(toJson(mount(<Provider store={store}><ConnectedResults/></Provider>)))
            .toMatchSnapshot();
    });
});
