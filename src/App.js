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
    <Toggler width={120} height={68} borderSize={4} planetPadding={4} />
  </AppWrapper>
);

export default App;
