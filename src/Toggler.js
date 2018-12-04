import React, { useState } from 'react';
import styled from 'styled-components';

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    background-color: ${props => props.toggled ? '#2B2A2F' : '#C5D5DE'};
    border: 4px solid ${props => props.toggled ? '#1B1D1C' : '#A0B7C4'};
    border-radius: 30px;
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
    border-radius: 34px;

    ${props => props.toggled ? `
        background: 
            radial-gradient(white 3px, transparent 1px),
            radial-gradient(white 2px, transparent 1px);

        background-position: 0 0, 12px 15px;

        background-size: 30px 30px;
        background-repeat: repeat;
    ` : ''}
`;

const Planet = styled.span`
    position: absolute;
    height: 30px;
    width: 30px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    background-color: ${props => props.toggled ? '#FFFFFD' : '#F2DE8A'};
    border-radius: 50%;
    ${props => props.toggled ? 'transform: translateX(26px);' : ''}
    border: 2px solid ${props => props.toggled ? '#E1E3D5' : 'rgb(217, 206, 137)'};
    box-sizing: border-box;
    overflow: hidden;
`;

const Circle = styled.span`
transition: opacity 0.2s;

    opacity: ${props => props.toggled ? '100' : '0'};
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: 2px solid #E1E3D5;
    border-radius: 50%;
    background-color: transparent;
    display: inline-block;
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
`;

const Toggler = () => {
    const [toggled, setToggled] = useState(false);
    return (
        <Switch 
            type="checkbox"
            toggled={toggled} 
        >
            <Input type="checkbox" />
            <Slider 
                toggled={toggled} 
                onClick={() => setToggled(!toggled)}

            >
                <Planet toggled={toggled}>
                    <Circle toggled={toggled} size={5} top={3} left={5} />
                    <Circle toggled={toggled} size={4} top={10} left={20} />
                    <Circle toggled={toggled} size={6} top={3} left={5} />
                    <Circle toggled={toggled} size={6} top={20} left={5} />
                </Planet>
            </Slider>
        </Switch>
    );
}

export default Toggler;