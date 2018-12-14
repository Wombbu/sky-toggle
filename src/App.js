import React, { useState } from 'react';
import styled from 'styled-components';
import Toggler from './Toggler';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${React.h2} {
    font-family: 'Roboto Slab', serif;
  }
`;

const ToggleWrapper = styled.div`
  background-color: ${p => p.toggled ? 'rgb(30,30,30)' : 'rgb(244,244,244)'};
  transition: background-color 0.5s;
  border-radius: 100px;
  height: 130px;
  width: 400px;
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
    <ToggleContainer width={80} height={45} borderSize={3} planetPadding={1} />

    <h2> Toggle without borders is toggle without borders </h2>
    <ToggleContainer width={80} height={45} borderSize={0} planetPadding={3} />

    <h2> Round toggle is round </h2>
    <ToggleContainer width={80} height={80} borderSize={0} planetPadding={3} />

    <h2> Long toggle is loooooong </h2>
    <ToggleContainer width={300} height={45} borderSize={3} planetPadding={2} />

    <h2> Stupid looking toggle is stupid </h2>
    <ToggleContainer width={60} height={45} borderSize={4} planetPadding={8} />
  </AppWrapper>
);

export default App;
