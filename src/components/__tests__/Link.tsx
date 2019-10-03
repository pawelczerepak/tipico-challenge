import React from 'react';
import '../../setupTests';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Link from '../Link';

describe('Link', () => {
    it('capture snapshot', () => {
        expect(toJson(shallow(
            <Link/>,
        )))
            .toMatchSnapshot();
    });
});
