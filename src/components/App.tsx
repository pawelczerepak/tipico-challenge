import React from 'react';
import SearchInput from './SearchInput';
import styled from 'styled-components';
import Results from './Results';

const Wrapper = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
        <SearchInput/>
        <Results/>
    </Wrapper>
  );
};

export default App;
