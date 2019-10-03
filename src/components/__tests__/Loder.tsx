import React from 'react';
import '../../setupTests';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Loader} from '../Loader';

describe('Loader', () => {
    it('capture snapshot', () => {
        expect(toJson(shallow(
            <Loader/>,
        )))
            .toMatchSnapshot();
    });
});
