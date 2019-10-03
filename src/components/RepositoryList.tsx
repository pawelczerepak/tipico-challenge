import React from 'react';
import styled from 'styled-components';
import {Repository as RepositoryType} from '../types';
import Repository from './Repository';
import {Loader, CenteredLoaderWrapper} from './Loader';

interface Props {
    repositories: RepositoryType[];
}

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  min-height: 1570px;
  position: relative;
  @media (min-width: 768px) {
    min-height: 830px;
  }
`;

export const RepositoryList: React.FC<Props> = ({repositories}) => {
    return <List>
        {repositories.length === 0 ? <CenteredLoaderWrapper><Loader/></CenteredLoaderWrapper> : null}
        {repositories.map((r, i) => <Repository key={i} repository={r}/>)}
    </List>;
};

export default RepositoryList;
