import React from 'react';
import '../../setupTests';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Repository from '../Repository';

describe('Repository', () => {
    it('capture snapshot', () => {
        expect(toJson(shallow(<Repository repository={{full_name: 'owner/repo', owner: {login: 'login', avatar_url: 'url', html_url: 'url'}, description: 'desc', html_url: 'url', language: 'lang', stargazers_count: 34}}/>)))
            .toMatchSnapshot();
    });
});
