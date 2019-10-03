import React from 'react';
import {Repository} from '../types';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import Link from './Link';

interface Props {
    repository: Repository;
}

const Wrapper = styled.li`
  padding: 24px 0;
  display: flex;
  border-bottom: 1px solid #ced4da;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const PropWrapper = styled.span`
  min-width: 80px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    margin-left: 10px;
    &:not(:first-child) {
      text-align: right;
    }
  }
`;

const RepoNameWrapper = styled(PropWrapper)`
  font-size: 20px;
  flex: 1;
`;

export default ({repository}: Props) => {
    return <Wrapper>
        <RepoNameWrapper>
            <Link href={repository.html_url} target="_blank">{repository.full_name}</Link>
        </RepoNameWrapper>
        <PropWrapper>
            <Link href={repository.owner.html_url} target="_blank">{repository.owner.login}</Link>
        </PropWrapper>
        {repository.language ? <PropWrapper>{repository.language}</PropWrapper> : null}
        <PropWrapper>{repository.stargazers_count}{' '}<FontAwesomeIcon icon={faStar} color="gold"/></PropWrapper>
    </Wrapper>;
};
