import React from 'react';
import '../../setupTests';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import RepositoryList from '../RepositoryList';

describe('RepositoryList', () => {
    const repository = {
        full_name: 'owner/repo',
        owner: {login: 'login', avatar_url: 'url', html_url: 'url'},
        description: 'desc',
        html_url: 'url',
        language: 'lang',
        stargazers_count: 34,
    };
    it('capture snapshot', () => {
        expect(toJson(shallow(<RepositoryList repositories={[repository]}/>)))
            .toMatchSnapshot();
    });
});
