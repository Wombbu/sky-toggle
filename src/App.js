import React, { useState } from 'react';
import styled from 'styled-components';
import Toggler from './Toggler';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ToggleWrapper = styled.div`
  background-color: ${p => p.toggled ? 'rgb(30,30,30)' : 'rgb(234,234,234)'};
  transition: background-color 0.5s;
  border-radius: 100px;
  height: 200px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleContainer = ({width, height, borderSize, planetPadding}) => {
  const [toggled, setToggled] = useState(false);

  return (
    <ToggleWrapper toggled={toggled}>
      <Toggler width={width} height={height} borderSize={borderSize} planetPadding={planetPadding} onToggle={setToggled} />
    </ToggleWrapper>
  );
}

const App = () => (
  <AppWrapper>
    <h2> Vanilla toggle is vanilla </h2>
    <ToggleContainer width={120} height={68} borderSize={4} planetPadding={4} />

    <h2> Toggle without borders is toggle without borders </h2>
    <ToggleContainer width={120} height={68} borderSize={0} planetPadding={4} />

    <h2> Round toggle is round </h2>
    <ToggleContainer width={120} height={120} borderSize={0} planetPadding={6} />

    <h2> Long toggle is loooooong </h2>
    <ToggleContainer width={350} height={68} borderSize={4} planetPadding={4} />

    <h2> Short toggle is short </h2>
    <ToggleContainer width={120} height={100} borderSize={8} planetPadding={8} />
  </AppWrapper>
);

export default App;
