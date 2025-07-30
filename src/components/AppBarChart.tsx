"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const AppBarChart = () => {

    const chartData = [
        { month: "January", groupSurvey: 100, individualSurvey: 80 },
        { month: "February", groupSurvey: 30, individualSurvey: 100 },
        { month: "March", groupSurvey: 50, individualSurvey: 20 },
        { month: "April", groupSurvey: 70, individualSurvey: 45 },
        { month: "May", groupSurvey: 20, individualSurvey: 40 },
        { month: "June", groupSurvey: 60, individualSurvey: 15 },
      ]


const chartConfig = {
    groupSurvey: {
      label: "groupSurvey",
      color: "#2563eb",
    },
    individualSurvey: {
      label: "individualSurvey",
      color: "#60a5fa",
    },
  } satisfies ChartConfig
  


    return (
        <div className="">
            <h1 className="mb-4 font-medium">Monthly Survey</h1>
            <ChartContainer config={chartConfig} className="min-h-[150px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                dataKey="month"
                tickLine={true}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                tickLine={true}
                tickMargin={10}
                axisLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="groupSurvey" fill="var(--color-groupSurvey)" radius={4} />
                <Bar dataKey="individualSurvey" fill="var(--color-individualSurvey)" radius={4} />
                </BarChart>
            </ChartContainer>

        </div>

    )
}

export default AppBarChart;

