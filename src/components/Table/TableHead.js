import React from "react";
import styled from "styled-components";
import colours from "../../lib/colours";

const StyledHead = styled.th`
    font-weight: 400;
    color: ${colours.grayscale[900]};
    text-align: left;
    height: 66px;
    font-size: 16px;
    padding: 0 10px;

    &:first-child {
        padding-left: 18px;
    }

    &:last-child {
        padding-right: 18px;
    }
`;

const TableHead = ({ cells }) => {
    return (
        <tr>
            {cells.map((cell) => (
                <StyledHead key={cell}>{cell}</StyledHead>
            ))}
        </tr>
    );
};

export default TableHead;
