import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import Button from "../Button";
import colours from "../../lib/colours";

const TableWrapper = styled.div`
    overflow-x: scroll;

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

const StyledTable = styled.table`
    width: 100%;
    border-spacing: 0;
`;

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Pagination = styled.div`
    height: 38px;
    display: flex;
    align-items: center;
    margin: 16px;
    border: 1px solid ${colours.grayscale[200]};
    border-radius: 5px;
`;

const NavButton = styled(Button)`
    padding: 0 10px;
    svg {
        * {
            stroke: ${colours.grayscale[500]};
        }
    }
`;

const PageButton = styled(Button)`
    justify-content: center;
    padding: 0;
    margin: 0 10px;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    color: ${colours.grayscale[500]};
    font-size: 14px;

    ${({ active }) =>
        active &&
        `
        color: #000;
        background: ${colours.grayscale[200]};

        &:hover {
            color: initial;
        }
    `}
`;

const Table = ({ children, head, data, rows }) => {
    const [page, setPage] = useState(1);
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log(page);
        const _data = [...data];

        setItems(_data.splice((page - 1) * rows, rows));
    }, [page]);

    const renderPagination = () => {
        const total = Math.ceil(data.length / rows) + 1;
        const pages = [];

        pages.push(
            <NavButton
                variant="text"
                icon="arrow-left"
                onClick={() => setPage(Math.max(1, page - 1))}
            />
        );

        for (let i = 1; i < total; i++) {
            if (i === 4) {
                pages.push(<span>...</span>);
            }

            if (i <= 3 || i >= total - 3) {
                pages.push(
                    <PageButton
                        variant="text"
                        onClick={() => setPage(i)}
                        active={page === i}
                    >
                        {i}
                    </PageButton>
                );
            } else if (i > 3 && i < total - 3) {
                if (page === i) {
                    pages.push(
                        <PageButton
                            variant="text"
                            onClick={() => setPage(i)}
                            active={page === i}
                        >
                            {i}
                        </PageButton>
                    );
                    pages.push(<span>...</span>);
                }
            }
        }

        pages.push(
            <NavButton
                variant="text"
                icon="arrow-right"
                onClick={() => setPage(Math.min(total, page + 1))}
            />
        );

        return pages;
    };

    return (
        <>
            <TableWrapper>
                <StyledTable>
                    <tbody>
                        <TableHead cells={head} />
                        {items.map((row, index) => (
                            <TableRow key={`${index}-${page}`} cells={row} />
                        ))}
                    </tbody>
                </StyledTable>
            </TableWrapper>
            <PaginationWrapper>
                <Pagination>{renderPagination()}</Pagination>
            </PaginationWrapper>
        </>
    );
};

export default Table;
