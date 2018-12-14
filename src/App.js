import React, { useState } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Toggler from './Toggler';

const GlobalStyle = createGlobalStyle`
  body { 
      margin: 1rem;
      font-family: 'Roboto Slab', serif;
      text-align: center;
  }
`;

const Title = styled.h1`
  margin-top: 4rem;  
  font-size: 4rem;
  line-height: 4.5rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  margin-top: 4rem;
  margin-bottom: 1rem;
`

const Link = styled.a`
  text-decoration: none;
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ToggleWrapper = styled.div`
  background-color: ${p => p.toggled ? 'rgb(80,80,80)' : 'rgb(244,244,244)'};
  transition: background-color 0.5s;
  border-radius: 100px;
  height: 130px;
  width: 100%;
  max-width: 400px;
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomText = styled.p`
  margin-top: 3rem;
  margin-bottom: 2rem;
`

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
    <GlobalStyle />
    <Title> Sky toggle </Title>
    <Link href="https://github.com/Wombbu/sky-toggle"> Go check the project on GitHub </Link>
    <SubTitle> Vanilla toggle is vanilla </SubTitle>
    <ToggleContainer width={80} height={45} borderSize={3} planetPadding={1} />

    <SubTitle> Sleek toggle is sleek </SubTitle>
    <ToggleContainer width={80} height={45} borderSize={0} planetPadding={3} />

    <SubTitle> Round toggle is round </SubTitle>
    <ToggleContainer width={80} height={80} borderSize={0} planetPadding={3} />

    <SubTitle> Long toggle is loooooong </SubTitle>
    <ToggleContainer width={250} height={45} borderSize={3} planetPadding={2} />

    <SubTitle> Stupid toggle is stupid </SubTitle>
    <ToggleContainer width={60} height={45} borderSize={4} planetPadding={8} />

    <BottomText>Made with  <span role="img" aria-label="nail polish">💅</span><Link href="https://www.styled-components.com/">styled-components</Link>, <Link href="https://reactjs.org/docs/hooks-intro.html">React-hooks</Link> and ❤️ </BottomText>
  </AppWrapper>
);

export default App;
