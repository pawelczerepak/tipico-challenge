import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import {searchInput} from '../selectors/searchInput';
import {setSearchInput} from '../actions/searchInput';
import {searchRepositories} from '../actions/search';

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
    };
}

export const SearchInput: React.FC<Props> = ({query, actions: {setSearchInput, searchRepositories}}) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value);
    const onSearch = () => searchRepositories({query});
    return (
        <Wrapper>
            <Input value={query} onChange={onChange}/>
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
            query: searchInput(state),
        }),
        (dispatch) => ({
            actions: bindActionCreators({
                setSearchInput,
                searchRepositories,
            }, dispatch),
        })),
)(SearchInput);
