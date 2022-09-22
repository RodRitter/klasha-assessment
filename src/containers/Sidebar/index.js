import React from "react";
import styled from "styled-components";
import colours from "../../lib/colours";
import Logo from "../../components/Logo";
import SidebarGroup from "./SidebarGroup";
import SidebarLink from "./SidebarLink";
import Button from "../../components/Button";

const SidebarWrapper = styled.div`
    min-height: 100vh;
    height: 100%;
    background: ${colours.secondary};
    width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all ease-in 0.2s;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        margin-right: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${colours.grayscale[300]};
        border-radius: 20px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;

const SidebarInner = styled.div`
    padding: 48px 48px 0 48px;
`;

const HideButton = styled(Button)`
    margin: 0 0 40px 40px;
    flex: 0 0 40px;
    width: fit-content;
`;

const Sidebar = ({ toggle, isOpen }) => {
    return (
        <SidebarWrapper>
            <SidebarInner>
                <Logo />
                <SidebarGroup title="Main pages">
                    <SidebarLink
                        label="Dashboard"
                        icon="pie-chart"
                        link="/"
                        active
                    />
                    <SidebarLink label="Balances" icon="wallet" disabled />
                    <SidebarLink
                        label="Transactions"
                        icon="payments"
                        link="/transactions"
                    />
                    <SidebarLink label="Analytics" icon="chart" disabled />
                    <SidebarLink label="Marketing" icon="radar" disabled />
                    <SidebarLink
                        label="Exchange rates"
                        icon="exchange"
                        disabled
                    />
                </SidebarGroup>

                <SidebarGroup title="Accept payments">
                    <SidebarLink
                        label="KlashaCheckout"
                        icon="shopping-cart"
                        disabled
                    />
                    <SidebarLink
                        label="Payment links"
                        icon="payment-link"
                        disabled
                    />
                </SidebarGroup>

                <SidebarGroup title="Send payments">
                    <SidebarLink
                        label="KlashaWire"
                        icon="transactions"
                        disabled
                    />
                </SidebarGroup>
            </SidebarInner>

            {isOpen && (
                <HideButton variant="ghost" icon="arrow-left" onClick={toggle}>
                    Hide panel
                </HideButton>
            )}
        </SidebarWrapper>
    );
};

export default Sidebar;
