import React from "react";
import PageLayout from "./layouts/PageLayout";
import styled from "styled-components";
import colours from "../lib/colours";
import { Typography } from "../components/base";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { Table } from "../components/Table";
import mockData from "../lib/mockData";
import breakpoints from "../lib/breakpoints";

const TransactionsWrapper = styled.div`
    border: 1px solid ${colours.grayscale[200]};
    border-radius: 8px;
`;

const Header = styled(Typography)`
    margin: 18px;
`;

const FiltersSection = styled.div`
    padding: 10px 18px;
    border: 1px solid ${colours.grayscale[200]};
    border-left: none;
    border-right: none;
    display: flex;
    justify-content: space-between;

    ${breakpoints.sm} {
        flex-direction: column;
    }
`;

const TableSection = styled.div`
    padding: 18px 0 0 0;
`;

const FilterButton = styled(Button)`
    margin-left: 10px;
    display: flex;

    &:first-child {
        margin-left: 0;
    }

    ${breakpoints.sm} {
        margin-top: 10px;
    }
`;

const FilterButtons = styled.div`
    display: flex;
`;

const Transactions = () => {
    return (
        <PageLayout>
            <TransactionsWrapper>
                <Header kind="h5">Transaction history</Header>
                <FiltersSection>
                    <div>
                        <TextInput placeholder="Search" icon="search" />
                    </div>
                    <FilterButtons>
                        <FilterButton
                            variant="ghost"
                            icon="filter"
                            iconAlign="right"
                            size="sm"
                        >
                            Filter
                        </FilterButton>
                        <FilterButton variant="ghost">Export</FilterButton>
                    </FilterButtons>
                </FiltersSection>
                <TableSection>
                    <Table
                        rows={4}
                        page={1}
                        head={[
                            "Transaction ID",
                            "Source",
                            "Customer name",
                            "Customer email",
                            "Amount",
                            "Request date",
                            "Status",
                        ]}
                        data={mockData}
                    ></Table>
                </TableSection>
            </TransactionsWrapper>
        </PageLayout>
    );
};

export default Transactions;
