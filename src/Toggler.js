import React, { useState } from 'react';
import styled from 'styled-components';

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 120px;
    height: ${props => props.height}px;
    background-color: ${props => props.toggled ? '#2B2A2F' : '#C5D5DE'};
    border: 4px solid ${props => props.toggled ? '#1B1D1C' : '#A0B7C4'};
    border-radius: ${props => props.height / 2 + 8}px;
    transition: all 0.5s;
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
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;

    ${props => props.toggled ? `
        background: 
            radial-gradient(white 5px, transparent 2px),
            radial-gradient(white 3px, transparent 2px);

        background-position: 0 0, 24px 30px;

        background-size: 60px 60px;
        background-repeat: repeat;
    ` : ''}
`;

const Planet = styled.span`
    position: absolute;
    height: 60px;
    width: 60px;
    left: 4px;
    bottom: 4px;
    transition: .4s;
    background-color: ${props => props.toggled ? '#FFFFFD' : '#F2DE8A'};
    border-radius: 50%;
    ${props => props.toggled ? 'transform: translateX(52px);' : ''}
    border: 6px solid ${props => props.toggled ? '#E1E3D5' : 'rgb(217, 206, 137)'};
    box-sizing: border-box;
    overflow: hidden;
`;

const Crater = styled.span`
    transition: opacity 0.2s;
    opacity: ${props => props.toggled ? '100' : '0'};
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: 3px solid #E1E3D5;
    border-radius: 50%;
    background-color: transparent;
    display: inline-block;
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
`;

const Toggler = () => {
    const [toggled, setToggled] = useState(false);
    const height = 68;
    return (
        <Switch 
            toggled={toggled}
            height={height}
        >
            <Input type="checkbox" />
            <Slider 
                toggled={toggled} 
                onClick={() => setToggled(!toggled)}
            >
                <Planet toggled={toggled}>
                    <Crater toggled={toggled} size={7} top={3} left={5} />
                    <Crater toggled={toggled} size={6} top={10} left={20} />
                    <Crater toggled={toggled} size={7} top={3} left={5} />
                    <Crater toggled={toggled} size={7} top={20} left={5} />
                </Planet>
            </Slider>
        </Switch>
    );
}

export default Toggler;