import React from "react";
import styled from "styled-components";
import colours from "../../lib/colours";
import Icon from "../Icon";

const InputWrapper = styled.div`
    position: relative;
`;

const StyledInput = styled.input`
    border: 1px solid ${colours.grayscale[300]};
    border-radius: 8px;
    height: 40px;
    font-size: 14px;
    padding: 0 15px;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }
`;

const StyledIcon = styled(Icon)`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
`;

const TextInput = ({ placeholder, icon }) => {
    return (
        <InputWrapper>
            <StyledInput type="text" placeholder={placeholder} />
            {icon && <StyledIcon name={icon} />}
        </InputWrapper>
    );
};

export default TextInput;
