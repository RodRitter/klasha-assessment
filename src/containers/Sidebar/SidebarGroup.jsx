import React from "react";
import styled from "styled-components";
import { Typography } from "../../components/base";

const GroupWrapper = styled.div`
    margin-bottom: 30px;
`;

const Heading = styled(Typography)`
    white-space: nowrap;
    margin: 0 0 16px 0;
`;

const SidebarGroup = ({ children, title, isOpen }) => {
    return (
        <GroupWrapper isOpen={isOpen}>
            <Heading kind="h6" isOpen={isOpen}>
                {title}
            </Heading>
            {children}
        </GroupWrapper>
    );
};

export default SidebarGroup;
