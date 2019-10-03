import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import {getCurrentPage, getError, getLoadedPages, getPage, getPageCount, getTotalCount} from '../selectors/results';
import {RepositoryList} from './RepositoryList';
import {Repository as RepositoryType} from '../types';
import styled from 'styled-components';
import Pagination from './Pagination';
import {setCurrentPage} from '../actions/results';
import {searchRepositories} from '../actions/search';
import {getSearchInput} from '../selectors/getSearchInput';

interface Props {
    totalCount: number | null;
    error: Error | null;
    currentPage: number;
    page: RepositoryType[];
    pageCount: number;
    loadedPages: number[];
    actions: {
        setCurrentPage: typeof setCurrentPage,
        searchRepositories: typeof searchRepositories,
    };
    searchInput: string;
}

const Message = styled.p`
  text-align: center;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ResultsContents: React.FC<Props> = (props) => {
    const {
        totalCount, error, page, loadedPages, currentPage,
    } = props;

    if (error && !loadedPages.includes(currentPage)) {
        return <Message>There was an error. :(</Message>;
    }

    if (totalCount === 0) {
        return <Message>There are no results.</Message>;
    }

    return (
        <RepositoryList repositories={page}/>
    );
};

export const Results: React.FC<Props> = (props) => {
    const {
        currentPage, pageCount, loadedPages, actions: {setCurrentPage, searchRepositories},
        searchInput, totalCount, error,
    } = props;

    if (!totalCount && !error) {
        return null;
    }

    const onChangePage = (page: number) => {
        if (!loadedPages.includes(page)) {
            searchRepositories({
                query: searchInput,
                page,
            });
        }
        setCurrentPage(page);
    };
    const pagination = pageCount > 1
        ? <Pagination currentPage={currentPage} pageCount={pageCount} onChangePage={onChangePage}/>
        : null;
    return (
        <Wrapper>
            <ResultsContents {...props}/>
            {pagination}
        </Wrapper>
    );
};

export default compose(
    connect(
        (state) => {
            const currentPage = getCurrentPage(state);
            return ({
                totalCount: getTotalCount(state),
                error: getError(state),
                currentPage,
                page: getPage(state, currentPage),
                pageCount: getPageCount(state),
                loadedPages: getLoadedPages(state),
                searchInput: getSearchInput(state),
            });
        },
        (dispatch) => ({
            actions: bindActionCreators({
                setCurrentPage,
                searchRepositories,
            }, dispatch),
        }),
    ),
)(Results);
