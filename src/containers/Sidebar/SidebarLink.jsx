import React from "react";
import styled, { css } from "styled-components";
import { useRoute, Link } from "wouter";
import colours from "../../lib/colours";
import Icon from "../../components/Icon";

const LinkWrapper = styled.div``;

const linkStyle = css`
    display: flex;
    align-items: center;
    padding: 8px 0;
    margin: 0;
    text-decoration: none;
    white-space: nowrap;
    transition: all ease-in 0.1s;
    color: #000;

    ${({ disabled }) =>
        disabled &&
        `
        opacity: 0.5;
        cursor: default;

    `}

    svg {
        width: 24px;
        height: 24px;

        * {
            transition: all ease-in 0.1s;
        }
    }

    ${({ active, disabled }) => {
        if (active) {
            return `
                color: ${!disabled ? colours.primary : colours.grayscale[500]};
                font-weight: 600;
        
                svg {
                    * {
                        stroke: ${
                            !disabled ? colours.primary : colours.grayscale[500]
                        };
                    }
                }
            `;
        }

        if (!disabled) {
            return `
            &:hover {
                color: ${colours.primary};
                svg {
                    * {
                        color: ${colours.primary};
                        stroke: ${colours.primary};
                    }
                }
            }`;
        }
    }}

    > span {
        padding-left: 10px;
    }
`;

const LinkText = styled(Link)`
    ${linkStyle}
`;

const DisabledLinkText = styled.div`
    ${linkStyle}
`;

const SidebarLink = ({ label, icon, link, disabled }) => {
    const [isActive] = useRoute(link);

    return (
        <LinkWrapper>
            {disabled ? (
                <DisabledLinkText disabled={disabled}>
                    <Icon name={icon} />
                    <span>{label}</span>
                </DisabledLinkText>
            ) : (
                <LinkText
                    href={link || ""}
                    active={isActive}
                    disabled={disabled}
                >
                    <Icon name={icon} />
                    <span>{label}</span>
                </LinkText>
            )}
        </LinkWrapper>
    );
};

export default SidebarLink;
