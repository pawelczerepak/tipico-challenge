import React from 'react';
import styled from 'styled-components';
import { uniq } from 'lodash';

interface Props {
    pageCount: number;
    currentPage: number;
    onChangePage: (page: number) => void;
}

const Wrapper = styled.ul`
  list-style-type: none;
  text-align: center;
`;

const Page = styled.li`
  display: inline-block;
  min-width: 40px;
  text-align: center;
  border: 1px solid #ced4da;
  cursor: pointer;
  padding: 5px;
  background-color: ${({isCurrent}: {isCurrent: any}) => isCurrent ? '#c8102e' : 'transparent'};
  color: ${({isCurrent}: {isCurrent: any}) => isCurrent ? '#fff' : 'initial'};
  &:not(:first-child) {
    border-left: none;
  }
`;

export default ({pageCount, currentPage, onChangePage}: Props) => {
    const pages = uniq([1, Math.max(1, currentPage - 1), currentPage, Math.min(pageCount, currentPage + 1), pageCount]);

    const makePage = (page: number) => {
        const onClick = () => onChangePage(page);
        return <Page key={page} onClick={onClick} isCurrent={page === currentPage}>{page}</Page>;
    };
    return <Wrapper>
        {pages.map(makePage)}
    </Wrapper>;
};
