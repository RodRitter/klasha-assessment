import React, { useState, useRef } from "react";
import styled from "styled-components";
import colours from "../../lib/colours";
import { Typography, Divider } from "../../components/base";
import Switch from "../../components/Switch";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import breakpoints from "../../lib/breakpoints";

const HeaderWrapper = styled.div`
    height: 88px;
    border-bottom: 1px solid ${colours.grayscale[200]};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    ${breakpoints.md} {
        height: auto;
    }
`;

const HeaderInner = styled.div`
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${breakpoints.md} {
        flex-direction: column;
    }
`;

const DateTypography = styled(Typography)`
    font-weight: 500;
`;

const RightWrapper = styled.div`
    display: flex;
    align-items: center;

    ${breakpoints.sm} {
        padding-top: 15px;
        flex-direction: column;
    }
`;

const LiveToggle = styled.div`
    display: flex;
    align-items: center;

    > p {
        margin-left: 10px;
        font-weight: 500;
    }
`;

const StyledDropdownButton = styled(Button)`
    padding: 0 0 0 12px;

    p {
        font-weight: 500;
    }
`;

const WelcomeButton = (props) => (
    <StyledDropdownButton
        variant="text"
        icon="drop-down"
        iconAlign="right"
        {...props}
    >
        <Typography>Welcome back, Ada!</Typography>
    </StyledDropdownButton>
);

const LangButton = (props) => (
    <StyledDropdownButton
        variant="text"
        icon="drop-down"
        iconAlign="right"
        {...props}
    >
        <Typography>En</Typography>
    </StyledDropdownButton>
);

const Header = () => {
    const [live, setLive] = useState(true);

    const welcomeButtonRef = useRef();

    return (
        <HeaderWrapper>
            <HeaderInner>
                <DateTypography>Today: 31 August, 2021</DateTypography>
                <RightWrapper>
                    <LiveToggle>
                        <Switch isToggled={live} onToggle={setLive} />
                        <Typography>Live</Typography>
                    </LiveToggle>

                    <Divider />

                    <Dropdown button={WelcomeButton} align="center">
                        <Typography>Dropdown Item #1</Typography>
                        <Typography>Dropdown Item #2</Typography>
                        <Typography>Dropdown Item #3</Typography>
                        <Typography>Dropdown Item #4</Typography>
                    </Dropdown>

                    <Dropdown button={LangButton} align="right">
                        <Typography>Dropdown Item #1</Typography>
                        <Typography>Dropdown Item #2</Typography>
                        <Typography>Dropdown Item #3</Typography>
                        <Typography>Dropdown Item #4</Typography>
                    </Dropdown>
                </RightWrapper>
            </HeaderInner>
        </HeaderWrapper>
    );
};

export default Header;
