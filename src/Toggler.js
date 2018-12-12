import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const ANIM_DURATION = 0.5;

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 120px;
    height: ${props => props.height}px;
    background-color: ${props => props.toggled ? '#39383d' : '#C5D5DE'};
    border: 6px solid ${props => props.toggled ? '#1B1D1C' : '#A0B7C4'};
    border-radius: ${props => props.height / 2 + 8}px;
    transition: all ${ANIM_DURATION}s;
`;

const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: ${ANIM_DURATION}s;
    border-radius: 50%;
`;

const Planet = styled.span`
    position: absolute;
    height: 60px;
    width: 60px;
    left: 4px;
    bottom: 4px;
    transition: ${ANIM_DURATION}s;
    background-color: ${props => props.toggled ? '#FFFFFD' : '#F2DE8A'};
    border-radius: 50%;
    ${props => props.toggled ? 'transform: translateX(52px);' : ''}
    border: 6px solid ${props => props.toggled ? '#E1E3D5' : '#dbc85e'};
    box-sizing: border-box;
    overflow: hidden;
`;

const Crater = styled.span`
    opacity: ${props => props.toggled ? '100' : '0'};
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    border: 3px solid #E1E3D5;
    border-radius: 50%;
    background-color: transparent;
    display: inline-block;
    position: absolute;
    transition: opacity ${ANIM_DURATION / 2}s;
`;

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

const RoundedRectangle = styled.span`
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border-radius: ${props => props.height / 2}px;
    opacity: ${props => props.visible ? '100' : '0' };
    animation: ${props => props.visible ? fadeInAnimation : fadeOutAnimation} ${ANIM_DURATION / 2}s ease-in-out 0s 1

    background-color: white;
    display: inline-block;
    position: absolute;
`;

const Cloud = RoundedRectangle;
const Star = props => <RoundedRectangle {...props} width={props.diameter} height={props.diameter} />;

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
                <Planet toggled={toggled}>
                    <Crater toggled={toggled} size={7} top={3} left={5} />
                    <Crater toggled={toggled} size={6} top={10} left={20} />
                    <Crater toggled={toggled} size={7} top={3} left={5} />
                    <Crater toggled={toggled} size={7} top={20} left={5} />
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