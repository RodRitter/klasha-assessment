/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "wouter";
import styled from "styled-components";

const StyledLink = styled.a`
    margin-bottom: 28px;
    display: inline-block;
`;

const Logo = () => {
    return (
        <Link href="/">
            <StyledLink>
                <img src="images/logo.png" alt="Klasha" />
            </StyledLink>
        </Link>
    );
};

export default Logo;
