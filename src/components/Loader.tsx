import PulseLoader from 'react-spinners/PulseLoader';
import React from 'react';
import styled from 'styled-components';

export const Loader = () => {
    return <PulseLoader color="#c8102e"/>;
};

export const CenteredLoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
