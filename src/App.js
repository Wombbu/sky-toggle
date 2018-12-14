import React, { useState } from 'react';
import styled from 'styled-components';
import Toggler from './Toggler';

const Title = styled.h1`
  margin-bottom: 0.3rem;
  font-size: 4rem;
`;

const SubTitle = styled.h2`
  margin-top: 7rem;
`

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 7rem;

  * {
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
    <Title> Sky toggle </Title>
    <a href="https://github.com/Wombbu/sky-toggle"> Go check the project on GitHub </a>
    <SubTitle> Vanilla toggle is vanilla </SubTitle>
    <ToggleContainer width={80} height={45} borderSize={3} planetPadding={1} />

    <SubTitle> Sleek toggle is sleek </SubTitle>
    <ToggleContainer width={80} height={45} borderSize={0} planetPadding={3} />

    <SubTitle> Round toggle is round </SubTitle>
    <ToggleContainer width={80} height={80} borderSize={0} planetPadding={3} />

    <SubTitle> Long toggle is loooooong </SubTitle>
    <ToggleContainer width={300} height={45} borderSize={3} planetPadding={2} />

    <SubTitle> Stupid toggle is stupid </SubTitle>
    <ToggleContainer width={60} height={45} borderSize={4} planetPadding={8} />

  </AppWrapper>
);

export default App;
