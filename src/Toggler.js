import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const ANIM_DURATION = 0.5;

const WIDTH = 120;
const HEIGHT = 68;
const BORDER_WIDTH = 6;
const PLANET_PADDING = 4;

const colors = {
    day: {
        containerBorder: '#A0B7C4',
        sky: '#C5D5DE',
        planet: {
            border: '#DBC85E',
            surface: '#F2DE8A',
        }
    },
    night: {
        containerBorder: '#1B1D1C',
        sky: '#39383d',

        planet: {
            border: '#E1E3D5',
            surface: '#FFFFFD'
        }
    }
}

const fadeInAnimation = keyframes`
  0% {
    transform: translate(20px, -20px);
    opacity: 0;
  }
  100% {
    transform: translate(0px, 0px);
    opacity: 100;
  }
`

const fadeOutAnimation = keyframes`
  0% {
    transform: translate(0px, 0px);
    opacity: 100;
  }
  100% {
    transform: translate(20px, -20px);
    opacity: 0;
  }
`;

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    background-color: ${props => props.toggled ? colors.night.sky : colors.day.sky};
    border: 6px solid ${props => props.toggled ? colors.night.containerBorder : colors.day.containerBorder};
    border-radius: ${HEIGHT / 2 + BORDER_WIDTH}px;
    transition: all ${ANIM_DURATION}s;
`;

const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

const Slider = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: ${ANIM_DURATION}s;
    border-radius: 50%;
    cursor: pointer;
`;

const Planet = styled.span`
    position: absolute;
    height: ${WIDTH / 2}px;
    width: ${WIDTH / 2}px;
    left: ${PLANET_PADDING}px;
    bottom: ${PLANET_PADDING}px;
    transition: ${ANIM_DURATION}s;
    background-color: ${props => props.day ? colors.day.planet.surface : colors.night.planet.surface};
    border: 6px solid ${props => props.day ? colors.day.planet.border : colors.night.planet.border};
    border-radius: 50%;
    transform: ${props => props.day ? 'none' : `translateX(${WIDTH / 2 - PLANET_PADDING * 2}px)`};
    box-sizing: border-box;
    overflow: hidden;
`;

const FreelyPositionedRoundedElement = styled.span`
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    opacity: ${props => props.visible ? '100' : '0' };
    animation: ${props => props.visible ? fadeInAnimation : fadeOutAnimation} ${ANIM_DURATION / 2}s ease-in-out 0s 1
    border-radius: ${props => props.height / 2}px;

    display: inline-block;
    position: absolute;
`;

const Cloud = styled(FreelyPositionedRoundedElement)`
  background-color: white;
`;

const FreelyPositionedRoundElement = props => <FreelyPositionedRoundedElement {...props} width={props.diameter} height={props.diameter} />;

const Crater = styled(FreelyPositionedRoundElement)`
    border: 3px solid ${colors.night.planet.border};
    background-color: transparent;
    border-radius: 50%;
`;

const Star = styled(FreelyPositionedRoundElement)`
  background-color: white
`;


const Toggler = () => {
    const [toggled, setToggled] = useState(false);
    const height = 68;
    return (
        <Switch 
            toggled={toggled}
            height={height}
        >
            <Input type="checkbox" onChange={event => setToggled(event.target.checked)} />
            <Slider 
                toggled={toggled} 
                onClick={setToggled}
            >
                <Planet day={!toggled}>
                    <Crater visible={toggled} diameter={7} top={3} left={5} />
                    <Crater visible={toggled} diameter={6} top={10} left={20} />
                    <Crater visible={toggled} diameter={7} top={3} left={5} />
                    <Crater visible={toggled} diameter={7} top={20} left={5} />
                </Planet>
            </Slider>
            <Cloud top={20} left={30} visible={!toggled} width={30} height={10} />
            <Cloud top={35} left={45} visible={!toggled} width={40} height={10} />

            <Star top={35} left={45} visible={toggled} diameter={5} />
            <Star top={20} left={20} visible={toggled} diameter={3} />
            <Star top={30} left={10} visible={toggled} diameter={3} />
        </Switch>
    );
}

export default Toggler;