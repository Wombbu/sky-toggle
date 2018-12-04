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
    

    ::before {
        position: absolute;
        content: "";
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
    }
`;

const Toggler = () => {
    const [toggled, setToggled] = useState(false);
    const height = 46;
    return (
        <Switch 
            type="checkbox"
            toggled={toggled} 
        >
            <Input type="checkbox" />
            <Slider 
                toggled={toggled} 
                onClick={() => setToggled(!toggled)}

            />
        </Switch>
    );
}

export default Toggler;