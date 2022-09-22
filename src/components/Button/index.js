import React from "react";
import styled from "styled-components";
import colours from "../../lib/colours";
import Icon from "../Icon";

const StyledButton = styled.button`
    display: inline-block;
    color: #ffffff;
    height: 40px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    padding: 0 13px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all ease-in-out 0.2s;

    > span {
        margin: 0 5px;
    }

    svg {
        width: ${({ size }) => (size === "sm" ? 16 : 24)}px;
        height: 24px;

        * {
            transition: all ease-in-out 0.2s;
            stroke: #fff;
        }
    }

    &:hover {
        filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.25));
    }
`;

const PrimaryButton = styled(StyledButton)`
    background: ${colours.primary};
`;

const CTAButton = styled(StyledButton)`
    background: ${colours.cta};
`;

const GhostButton = styled(StyledButton)`
    color: ${colours.cta};
    background: transparent;
    border: 1px solid ${colours.cta};

    svg {
        * {
            stroke: ${colours.cta};
        }
    }
`;

const TextButton = styled(StyledButton)`
    color: ${colours.cta};
    background: transparent;
    font-size: 16px;

    svg {
        * {
            stroke: ${colours.cta};
        }
    }

    &:hover {
        filter: none;
        color: ${colours.primary};

        svg {
            * {
                stroke: ${colours.primary};
            }
        }
    }
`;

const Button = ({ icon, iconAlign, variant, children, ...restProps }) => {
    const _iconAlign = iconAlign || "left";

    switch (variant) {
        case "cta":
            return (
                <CTAButton {...restProps}>
                    {_iconAlign === "left" && <Icon name={icon} />}
                    {children && <span>{children}</span>}
                    {_iconAlign === "right" && <Icon name={icon} />}
                </CTAButton>
            );
        case "ghost":
            return (
                <GhostButton {...restProps}>
                    {_iconAlign === "left" && <Icon name={icon} />}
                    {children && <span>{children}</span>}
                    {_iconAlign === "right" && <Icon name={icon} />}
                </GhostButton>
            );
        case "text":
            return (
                <TextButton {...restProps}>
                    {_iconAlign === "left" && <Icon name={icon} />}
                    {children && <span>{children}</span>}
                    {_iconAlign === "right" && <Icon name={icon} />}
                </TextButton>
            );
        default:
            return (
                <PrimaryButton {...restProps}>
                    {_iconAlign === "left" && <Icon name={icon} />}
                    {children && <span>{children}</span>}
                    {_iconAlign === "right" && <Icon name={icon} />}
                </PrimaryButton>
            );
    }
};

export default Button;
