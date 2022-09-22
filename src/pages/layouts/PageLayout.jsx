import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../../containers/Sidebar";
import Header from "../../containers/Header";
import Button from "../../components/Button";
import breakpoints from "../../lib/breakpoints";

const LayoutWrapper = styled.div`
    min-height: 100vh;
    position: relative;
    transition: all ease-in-out 0.2s;
    padding-left: ${({ isOpen }) => (!isOpen ? `0` : `280px`)};

    ${breakpoints.md} {
        padding-left: 0;
    }
`;

const SidebarTransitionWrapper = styled.div`
    transition: all ease-in-out 0.2s;
    transform: translateX(${({ isOpen }) => (isOpen ? `0` : `-280px`)});
    position: fixed;
    height: 100vh;
    left: 0;
    z-index: 20;
`;

const SidebarButton = styled(Button)`
    position: fixed;
    left: 40px;
    bottom: 40px;
    background: #fff;
`;

const PageWrapper = styled.div``;

const PageContent = styled.div`
    padding: 80px 32px;
    max-width: 1160px;
    margin: 0 auto;
`;

const PageLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <LayoutWrapper isOpen={sidebarOpen}>
            <SidebarTransitionWrapper isOpen={sidebarOpen}>
                <Sidebar toggle={toggleSidebar} isOpen={sidebarOpen} />
            </SidebarTransitionWrapper>

            <PageWrapper>
                <Header />
                <PageContent>{children}</PageContent>
            </PageWrapper>

            {!sidebarOpen && (
                <SidebarButton
                    variant="ghost"
                    icon="arrow-right"
                    iconAlign="right"
                    onClick={toggleSidebar}
                >
                    Show panel
                </SidebarButton>
            )}
        </LayoutWrapper>
    );
};

export default PageLayout;
