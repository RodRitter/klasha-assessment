import React from "react";
import styled from "styled-components";
import PageLayout from "./layouts/PageLayout";
import { Typography, Divider } from "../components/base";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import MockGraph from "../components/MockGraph";
import colours from "../lib/colours";
import breakpoints from "../lib/breakpoints";

const SalesOverview = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;
    margin-bottom: 32px;

    ${breakpoints.lg} {
        grid-template-columns: 1fr 1fr;
    }

    ${breakpoints.md} {
        grid-template-columns: 1fr;
    }
`;

const Sales = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;

    ${breakpoints.lg} {
        grid-template-columns: 1fr 1fr;
    }

    ${breakpoints.md} {
        grid-template-columns: 1fr;
    }
`;

const Panel = styled.div`
    border: 1px solid ${colours.cta};
    border-radius: 8px;
    padding: 24px;
    ${({ variant }) =>
        variant === "black" && `color: #fff; background: ${colours.cta};`}
    ${({ variant }) =>
        variant === "primary" &&
        `
            color: #fff; 
            border: none; 
            background-color: ${colours.primary};
            background-image: url("images/lines.svg");
            background-position: center center;
        `}
    
    ${breakpoints.sm} {
        padding: 10px;
    }
`;

const PanelHeading = styled(Typography)`
    margin-top: 0;
`;

const PanelValue = styled(Typography)`
    font-weight: 500;
    letter-spacing: -0.03em;
`;

const SalesHeading = styled(Typography)`
    margin-bottom: 0;
`;

const SalesFilters = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const SalesDayFilter = styled(Button)`
    ${({ active }) => active && `color: ${colours.primary};`}
`;

const CallToActionPanel = styled(Panel)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
        width: fit-content;
        font-size: 14px;
        font-weight: 400;
    }
`;

const CallToActionText = styled(Typography)`
    max-width: 192px;
    line-height: 32px;
`;

const CurrencyFilterButton = (props) => (
    <Button variant="ghost" icon="drop-down" iconAlign="right" {...props}>
        USD
    </Button>
);

const Dashboard = () => {
    return (
        <PageLayout>
            <Typography kind="h5">Sales overview</Typography>

            <SalesOverview>
                <Panel>
                    <PanelHeading>Todays sales</PanelHeading>
                    <PanelValue kind="h5">₦1,652.50</PanelValue>
                </Panel>
                <Panel variant="black">
                    <PanelHeading>24 Aug - 01 Sep 21</PanelHeading>
                    <MockGraph theme="dark" />
                    <PanelHeading>This week</PanelHeading>
                    <PanelValue kind="h5">₦1,652.50</PanelValue>
                </Panel>
                <Panel>
                    <PanelHeading>24 Aug - 01 Sep 21</PanelHeading>
                    <MockGraph theme="light" />
                    <PanelHeading>This month</PanelHeading>
                    <PanelValue kind="h5">₦1,652.50</PanelValue>
                </Panel>
                <Panel>
                    <PanelHeading>24 Aug - 01 Sep 21</PanelHeading>
                    <MockGraph theme="light" />
                    <PanelHeading>Last month</PanelHeading>
                    <PanelValue kind="h5">₦1,652.50</PanelValue>
                </Panel>
            </SalesOverview>

            <Sales>
                <SalesFilters>
                    <SalesHeading kind="h5">Sales</SalesHeading>
                    <Divider />
                    <SalesDayFilter variant="text" active>
                        7 days
                    </SalesDayFilter>
                    <SalesDayFilter variant="text">30 days</SalesDayFilter>

                    <Dropdown button={CurrencyFilterButton} align="center">
                        <Typography>Dropdown Item #1</Typography>
                        <Typography>Dropdown Item #2</Typography>
                        <Typography>Dropdown Item #3</Typography>
                        <Typography>Dropdown Item #4</Typography>
                    </Dropdown>
                </SalesFilters>
                <div></div>
            </Sales>

            <Sales>
                <Panel>
                    <MockGraph theme="light" height={250} useAxes />
                </Panel>
                <CallToActionPanel variant="primary">
                    <CallToActionText kind="h5">
                        KlashaWire - send money to businesses globally from
                        Africa
                    </CallToActionText>
                    <Button variant="cta">Send a Wire</Button>
                </CallToActionPanel>
            </Sales>
        </PageLayout>
    );
};

export default Dashboard;
