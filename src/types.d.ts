import {AnyAction} from 'redux';

export interface Params {
    query: string;
    sort: 'stars';
    order: 'asc' | 'desc';
    page: number;
    resultsPerPage: number;
}

export interface Response {
    'total_count': number;
    'items': [];
}

export interface Owner {
    'login': 'chvin';
    'avatar_url': 'https://avatars2.githubusercontent.com/u/5383506?v=4';
    'url': 'https://api.github.com/users/chvin';
}

interface Repository {
    'full_name': string;
    'owner': SearchRepositoriesOwner;
    'description': string;
    'url': string;
    'stargazers_count': number;
    'language'?: string;
}

interface AxiosFailAction extends AnyAction {
    error: Error;
}

interface AxiosSuccessAction extends AnyAction {
    meta: {
        previousAction: AnyAction;
    };
}
