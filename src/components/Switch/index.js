import React, { useState } from "react";
import styled from "styled-components";
import colours from "../../lib/colours";

const SWITCH_WIDTH = 42;
const SWITCH_HEIGHT = 24;
const PILL_PADDING = 4;
const PILL_WIDTH = SWITCH_HEIGHT - PILL_PADDING;

const SwitchWrapper = styled.div`
    display: inline-block;
    width: ${SWITCH_WIDTH}px;
    height: ${SWITCH_HEIGHT}px;
    border-radius: 50px;
    transition: background-color ease-in 0.1s;
    background-color: ${({ toggled }) =>
        toggled ? colours.primary : colours.grayscale[300]};
    position: relative;
    cursor: pointer;
`;

const SwitchPill = styled.div`
    height: ${PILL_WIDTH}px;
    width: ${PILL_WIDTH}px;
    border-radius: 50px;
    background: #ffffff;
    transition: all ease-in 0.1s;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    left: ${({ toggled }) =>
        toggled
            ? SWITCH_WIDTH - (PILL_WIDTH + PILL_PADDING / 2)
            : PILL_PADDING / 2}px;
`;

const Switch = ({ isToggled, onToggle }) => {
    const [toggled, setToggled] = useState(isToggled || false);

    const toggle = () => {
        if (onToggle) onToggle(!toggled);
        setToggled(!toggled);
    };

    return (
        <SwitchWrapper onClick={toggle} toggled={toggled}>
            <SwitchPill toggled={toggled} />
        </SwitchWrapper>
    );
};

export default Switch;
