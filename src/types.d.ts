import {AnyAction} from 'redux';

export interface Params {
    query: string;
    sort: 'stars';
    order: 'asc' | 'desc';
    page: number;
}

export interface Response {
    'total_count': number;
    'items': [];
}

export interface Owner {
    'login': string;
    'avatar_url': string;
    'html_url': string;
}

interface Repository {
    'full_name': string;
    'owner': Owner;
    'description': string;
    'html_url': string;
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
