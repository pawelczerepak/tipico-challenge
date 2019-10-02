import React from 'react';
import '../../setupTests';
import Button from '../Button';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Button', () => {
    it('capture snapshot', () => {
        expect(toJson(shallow(<Button/>)))
            .toMatchSnapshot();
    });
});
