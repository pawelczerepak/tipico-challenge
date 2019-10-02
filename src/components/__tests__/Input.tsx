import React from 'react';
import '../../setupTests';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Input from '../Input';

describe('Input', () => {
    it('capture snapshot', () => {
        expect(toJson(shallow(<Input/>)))
            .toMatchSnapshot();
    });
});
