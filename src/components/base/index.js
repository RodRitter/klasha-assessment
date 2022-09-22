import React from "react";
import styled from "styled-components";
import colours from "../../lib/colours";
import breakpoints from "../../lib/breakpoints";

const H1 = styled.h1`
    font-size: 46px;
    font-weight: 400;
    letter-spacing: -0.02em;
    margin-top: 0;
`;
const H2 = styled.h2`
    font-size: 40px;
    font-weight: 400;
    letter-spacing: -0.02em;
    margin-top: 0;
`;
const H3 = styled.h3`
    font-size: 36px;
    font-weight: 400;
    letter-spacing: -0.02em;
    margin-top: 0;
`;
const H4 = styled.h4`
    font-size: 32px;
    font-weight: 400;
    letter-spacing: -0.02em;
    margin-top: 0;
`;
const H5 = styled.h5`
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.02em;
    margin-top: 0;
    margin-bottom: 20px;
`;
const H6 = styled.h6`
    color: ${colours.grayscale[500]};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    margin: 5px 0 16px 0;
`;

const P = styled.p`
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;

const A = styled.a`
    color: ${colours.cta};
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    font-feature-settings: "cv03" on, "cv04" on;
`;

// className passed for styled-components to overwrite styling if needed
export const Typography = ({ kind, children, ...restProps }) => {
    switch (kind) {
        case "h1":
            return <H1 {...restProps}>{children}</H1>;
        case "h2":
            return <H2 {...restProps}>{children}</H2>;
        case "h3":
            return <H3 {...restProps}>{children}</H3>;
        case "h4":
            return <H4 {...restProps}>{children}</H4>;
        case "h5":
            return <H5 {...restProps}>{children}</H5>;
        case "h6":
            return <H6 {...restProps}>{children}</H6>;
        case "a":
            return <A {...restProps}>{children}</A>;
        default:
            return <P {...restProps}>{children}</P>;
    }
};

export const Divider = styled.div`
    width: 1px;
    height: 24px;
    margin: 0 0 0 12px;
    background: ${colours.grayscale[200]};
    ${breakpoints.md} {
        display: none;
    }
`;
