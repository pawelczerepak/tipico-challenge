import React from 'react';
import '../../setupTests';
import {SearchInput} from '../SearchInput';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('SearchInput', () => {
    it('capture snapshot', () => {
        expect(toJson(shallow(
            <SearchInput
                query="test"
                actions={{searchRepositories: jest.fn(), setSearchInput: jest.fn(), setCurrentPage: jest.fn()}}
            />,
        )))
            .toMatchSnapshot();
    });
});
