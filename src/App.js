import React from 'react';
import styled from 'styled-components';
import Toggler from './Toggler';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

const App = () => (
  <AppWrapper>
    <Toggler />
  </AppWrapper>
);

export default App;
