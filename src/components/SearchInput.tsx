import React, {ChangeEvent, KeyboardEvent} from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import {getSearchInput} from '../selectors/getSearchInput';
import {setSearchInput} from '../actions/searchInput';
import {searchRepositories} from '../actions/search';
import {setCurrentPage} from '../actions/results';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  & > button {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

interface Props {
    query: string;
    actions: {
        setSearchInput: typeof setSearchInput,
        searchRepositories: typeof searchRepositories,
        setCurrentPage: typeof setCurrentPage,
    };
}

export const SearchInput: React.FC<Props> = ({
    query, actions: {setSearchInput, searchRepositories, setCurrentPage},
}) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value);
    const onSearch = () => {
        setCurrentPage(1);
        searchRepositories({query});
    };
    const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        // search on enter key press
        if (e.keyCode === 13) {
            onSearch();
        }
    };
    return (
        <Wrapper>
            <Input value={query} onChange={onChange} placeholder="Search GitHub" onKeyUp={onKeyUp}/>
            <ButtonWrapper>
                <Button disabled={!query.trim()} onClick={onSearch}>
                    <FontAwesomeIcon icon={faSearch}/>{' '}Search
                </Button>
            </ButtonWrapper>
        </Wrapper>
    );
};

export default compose(
    connect(
        (state) => ({
            query: getSearchInput(state),
        }),
        (dispatch) => ({
            actions: bindActionCreators({
                setSearchInput,
                searchRepositories,
                setCurrentPage,
            }, dispatch),
        })),
)(SearchInput);
