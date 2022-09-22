import React from "react";
import styled, { keyframes } from "styled-components";
import colours from "../../lib/colours";

const introAnim = keyframes`
    0% { transform: translateY(-10px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
`;

const StyledTableRow = styled.tr`
    transition: all ease-in 0.1s;
    font-size: 14px;

    animation-name: ${introAnim};
    animation-duration: 0.5s;
    animation-iteration-count: 1;

    &:hover {
        background-color: ${colours.grayscale[100]};
    }
`;

const TableCell = styled.td`
    color: ${colours.grayscale[700]};
    height: 66px;
    padding: 0 10px;
    border-bottom: 1px solid ${colours.grayscale[200]};

    &:first-child {
        padding-left: 18px;
    }

    &:last-child {
        padding-right: 18px;
    }
`;

const TableRow = ({ cells }) => {
    return (
        <StyledTableRow>
            {cells.map((cell) => (
                <TableCell key={cell}>{cell}</TableCell>
            ))}
        </StyledTableRow>
    );
};

export default TableRow;
