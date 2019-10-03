import React from 'react';
import '../../setupTests';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Pagination from '../Pagination';

describe('Link', () => {
    it('capture snapshot', () => {
        expect(toJson(shallow(
            <Pagination pageCount={5} currentPage={1} onChangePage={jest.fn()}/>,
        )))
            .toMatchSnapshot();
    });
});
