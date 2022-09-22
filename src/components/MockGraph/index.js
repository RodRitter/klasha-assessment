import React, { useState, useEffect } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import colours from "../../lib/colours";
import styled from "styled-components";

const GraphWrapper = styled.div`
    color: #000;
`;

const CustomTooltip = styled.div`
    font-weight: 500;
    transform: translateX(-50%);
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
`;

const MockGraph = ({ theme, height, useAxes }) => {
    const [chartData, setChartData] = useState([]);
    const [tooltipX, setTooltipX] = useState(0);

    const getRandomBetween = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    };

    const getRandomData = () => {
        const days = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

        const _data = [];

        for (let i = 0; i < days.length; i++) {
            const rand = getRandomBetween(1000, 4000);
            _data.push({
                date: `${days[i]} Aug`,
                sales: rand,
                label: "rand",
            });
        }

        return _data;
    };

    useEffect(() => {
        setChartData(getRandomData());
        // eslint-disable-next-line
    }, []);

    const renderTooltip = (data) => {
        if (data.active) {
            setTooltipX(data.coordinate.x);
            return (
                <CustomTooltip theme={theme}>
                    ₦{data.payload[0].payload.sales}
                </CustomTooltip>
            );
        }
    };

    return (
        <GraphWrapper>
            <ResponsiveContainer width="99%" aspect={2.5} debounce={100}>
                <AreaChart
                    width="100%"
                    data={chartData}
                    margin={{
                        top: 30,
                        right: 0,
                        left: 0,
                        bottom: 10,
                    }}
                >
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor={colours.primary}
                                stopOpacity={0.3}
                            />
                            <stop
                                offset="95%"
                                stopColor={colours.primary}
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>

                    {useAxes && (
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            minTickGap={30}
                        />
                    )}
                    {useAxes && (
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            minTickGap={15}
                        />
                    )}

                    <Tooltip
                        content={renderTooltip}
                        position={{ x: tooltipX, y: 0 }}
                        cursor={{
                            stroke: theme === "dark" ? "#fff" : "#000",
                            strokeWidth: 1,
                        }}
                        wrapperStyle={{ outline: "none" }}
                    />
                    <Area
                        // type="monotone"
                        dataKey="sales"
                        stroke={colours.primary}
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </GraphWrapper>
    );
};

export default MockGraph;
