import React, { useState } from 'react';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import Toggler from './Toggler';

const theme = {
  day: {
      containerBorder: '#A0B7C4',
      sky: '#C5D5DE',
      cloud: 'white',

      planet: {
          border: '#DBC85E',
          surface: '#F2DE8A',
      }
  },
  night: {
      containerBorder: '#1B1D1C',
      sky: '#39383d',
      star: 'white',

      planet: {
          border: '#E1E3D5',
          surface: '#FFFFFD'
      }
  }
}

const uranusTheme = {
  day: {
    containerBorder: '#36962a',
    sky: '#41b532',
    cloud: '#b017e8',

    planet: {
      border: '#931125',
      surface: '#ef1a45',
    }
  },
  night: {
    containerBorder: '#931125',
    sky: '#b017e8',
    star: 'black',

    planet: {
      border: '#36962a',
      surface: '#41b532',
    }
  }
}

const GlobalStyle = createGlobalStyle`
  body { 
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

const DarkLink = styled(Link)`
  color: rgb(105,165,216);

  &:visited {
    color: rgb(110,160,90);

  }
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ToggleWrapper = styled.div`
  background-color: ${p => p.toggled ? 'rgb(80,80,80)' : 'rgb(244,244,244)'};
  transition: all 0.5s;
  border-radius: ${props => props.toggled ? 10 : 50}px;
  max-width: 400px;
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
`;

const BottomText = styled.p`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const SeoText = styled.div`
  height: ${props => props.toggled ? 80 : 0}px;
  opacity: ${props => props.toggled ? 1 : 0};
  transition: all 0.5s;
  margin-top: ${props => props.toggled ? 1.5 : 0}rem;
  display: flex;
  align-items: center;

  & > p {
    color: rgba(222,222,222);
    margin: 0;
    padding: 0;
    ${props => props.toggled ? '' : 'pointer-events: none;'}
  }
`;

const ToggleContainer = ({width, height, borderSize, planetPadding, children}) => {
  const [toggled, setToggled] = useState(false);

  return (
    <ToggleWrapper toggled={toggled}>
      <Toggler width={width} height={height} borderSize={borderSize} planetPadding={planetPadding} onToggle={setToggled} />
      <SeoText toggled={toggled} > {children} </SeoText>
    </ToggleWrapper>
  );
}

const App = () => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <GlobalStyle />
      <Title> Sky toggle </Title>
      <Link target="_blank" rel="noopener noreferrer" href="https://github.com/Wombbu/sky-toggle"> Check the project on GitHub </Link>
      <SubTitle>Vanilla toggle is vanilla</SubTitle>
      <ToggleContainer width={80} height={45} borderSize={3} planetPadding={1}>
        <p> Sky toggle is a heavily customizable slide toggle React component.</p>
      </ToggleContainer>

      <SubTitle>Sleek toggle is sleek</SubTitle>
      <ToggleContainer width={80} height={45} borderSize={0} planetPadding={3}>
        <p>The project is not production ready. <br/> PR:s are welcome tho 😊 </p>
      </ToggleContainer>

      <SubTitle>Round toggle is round</SubTitle>
      <ToggleContainer width={80} height={80} borderSize={0} planetPadding={3}>
       <p>This is just a project I made to fulfill my tinkering needs.</p>
      </ToggleContainer>

      <SubTitle>Long toggle is loooooong</SubTitle>
      <ToggleContainer width={200} height={45} borderSize={3} planetPadding={2}>
        <p>Who me?<br/>I'm Lauri. Nice to meet you.</p>
      </ToggleContainer>
      
      <SubTitle>Random toggle is random <span role="img" aria-label="thinking face">🤔</span></SubTitle>
      <ThemeProvider theme={uranusTheme}>
        <ToggleContainer width={120} height={68} borderSize={4} planetPadding={8}>
          <p>You can reach me from <DarkLink target="_blank" rel="noopener noreferrer" href="https://twitter.com/Wombbu" >Twitter</DarkLink> and <DarkLink target="_blank" rel="noopener noreferrer" href="https://github.com/Wombbu" >GitHub</DarkLink></p>
        </ToggleContainer>
      </ThemeProvider>

      <BottomText>Made with  <span role="img" aria-label="nail polish">💅</span><Link target="_blank" rel="noopener noreferrer" href="https://www.styled-components.com/">styled-components</Link>, <Link target="_blank" rel="noopener noreferrer" href="https://reactjs.org/docs/hooks-intro.html">React-hooks</Link> and ❤️ </BottomText>
    </AppWrapper>
  </ThemeProvider>
);

export default App;
