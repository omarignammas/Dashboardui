"use client"

import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const AppAreaChart = () => {

    const chartData = [
        { month: "January", groupSurvey: 10, individualSurvey: 35 },
        { month: "February", groupSurvey: 30, individualSurvey: 40 },
        { month: "March", groupSurvey: 25, individualSurvey: 20 },
        { month: "April", groupSurvey: 7, individualSurvey: 25 },
        { month: "May", groupSurvey: 20, individualSurvey: 40 },
        { month: "June", groupSurvey: 30, individualSurvey: 15 },
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
            <h1 className="mb-4 font-medium">Total Submitions</h1>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <AreaChart accessibilityLayer data={chartData}>
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
                <defs>
              <linearGradient id="fillindividualSurvey" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-individualSurvey)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-individualSurvey)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillgroupSurvey" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-groupSurvey)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-groupSurvey)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
                <Area
              dataKey="groupSurvey"
              type="natural"
              fill="url(#fillgroupSurvey)"
              fillOpacity={0.4}
              stroke="var(--color-groupSurvey)"
              stackId="a"
            />
            <Area
              dataKey="individualSurvey"
              type="natural"
              fill="url(#fillindividualSurvey)"
              fillOpacity={0.4}
              stroke="var(--color-individualSurvey)"
              stackId="a"
            />
                </AreaChart>
            </ChartContainer>

        </div>

    )
}

export default AppAreaChart;

