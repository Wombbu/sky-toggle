import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const ANIM_DURATION = 0.5;

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

    & * {
        cursor: pointer;
    }
`;

const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

const Sky = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: ${props => props.day ? colors.day.sky : colors.night.sky};
    border: ${p => p.borderWidth}px solid ${props => props.day ? colors.day.containerBorder : colors.night.containerBorder};
    border-radius: ${p => p.height / 2 + p.borderWidth}px;
    transition: border ${ANIM_DURATION}s, background-color ${ANIM_DURATION}s;
    width: ${p => p.width}px;
    height: ${p => p.height}px;
`;

const Planet = styled.span`
    position: absolute;
    left: ${p => p.planetPadding}px;
    bottom: ${p => p.planetPadding}px;
    top: ${p => p.planetPadding}px;
    width: ${p => p.height - p.planetPadding * 2}px;
    background-color: ${props => props.day ? colors.day.planet.surface : colors.night.planet.surface};
    border: ${p => p.borderWidth}px solid ${props => props.day ? colors.day.planet.border : colors.night.planet.border};
    border-radius: 50%;
    transform: ${props => props.day ? 'none' : `translateX(${props.width - props.planetPadding * 2 - (props.height - props.planetPadding * 2)}px)`};
    transition: all ${ANIM_DURATION}s ;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 2;
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
  z-index: 2;
`;

const FreelyPositionedRoundElement = props => <FreelyPositionedRoundedElement {...props} width={props.diameter} height={props.diameter} />;

const Crater = styled(FreelyPositionedRoundElement)`
    border: 3px solid ${colors.night.planet.border};
    background-color: transparent;
    border-radius: 50%;
    z-index: 2;
`;

const Star = styled(FreelyPositionedRoundElement)`
  background-color: white;
  z-index: 1;
`;

const Toggler = ({width, height, planetPadding, borderSize}) => {
    const [toggled, setToggled] = useState(false);

    const planetDiameter = height - (planetPadding * 2);
    return (
        <Switch>
            <Input type="checkbox" onChange={event => setToggled(event.target.checked)} />
            <Sky
                day={!toggled}
                onClick={setToggled}
                borderWidth={borderSize}
                width={width}
                height={height}
            >
                <Planet day={!toggled} width={width} height={height} planetPadding={planetPadding} borderSize={borderSize}>
                    <Crater visible={toggled} diameter={0.11 * planetDiameter} top={0.05 * planetDiameter} left={0.05 * planetDiameter} />
                    <Crater visible={toggled} diameter={0.09 * planetDiameter} top={0.16 * planetDiameter} left={0.32 * planetDiameter} />
                    <Crater visible={toggled} diameter={0.11 * planetDiameter} top={0.05 * planetDiameter} left={0.05 * planetDiameter} />
                    <Crater visible={toggled} diameter={0.11 * planetDiameter} top={0.32 * planetDiameter} left={0.05 * planetDiameter} />
                </Planet>
                <Cloud top={height * 0.3} left={width * 0.25} visible={!toggled} width={width * 0.35} height={height * 0.15} />
                <Cloud top={height * 0.55} left={width * 0.4} visible={!toggled} width={width * 0.4} height={height * 0.15} />

                <Star top={height * 0.5} left={width * 0.375} visible={toggled} diameter={height * 0.08} />
                <Star top={height * 0.3} left={width * 0.16} visible={toggled} diameter={height * 0.04} />
                <Star top={height * 0.5} left={width * 0.2} visible={toggled} diameter={height * 0.04} />
            </Sky>
        </Switch>
    );
}

export default Toggler;