import React from "react";
import styled, { keyframes } from "styled-components";
import colours from "../../lib/colours";

const introAnim = keyframes`
    0% { bottom: 15px; opacity: 0; }
    100% { opacity: 1; bottom: 0; }
`;

const Wrapper = styled.div`
    background: #fff;
    border: 1px solid ${colours.grayscale[300]};
    width: 250px;
    padding: 0 18px;
    box-sizing: border-box;
    border-radius: 5px;

    position: absolute;
    z-index: 20;
    bottom: 0;
    ${({ align }) =>
        align === "right" && `right: 0; transform: translate(0, 104%);`}
    ${({ align }) =>
        align === "center" && `left: 50%; transform: translate(-50%, 104%);`}
    ${({ align }) =>
        (!align || align === "left") &&
        `left: 0; transform: translate(0, 104%);`}

    animation-name: ${introAnim};
    animation-duration: 0.1s;
    animation-iteration-count: 1;

    -webkit-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
`;

const DropdownContent = ({ children, align }) => {
    return <Wrapper align={align}>{children}</Wrapper>;
};

export default DropdownContent;
