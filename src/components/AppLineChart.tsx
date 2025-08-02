"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "User Habits Progression"

const chartData = [
  { month: "January", Quran: 86, Adhkar: 80, Fajr: 40, Sport: 100 },
  { month: "February", Quran: 55, Adhkar: 20, Fajr: 60, Sport: 60  },
  { month: "March", Quran: 37, Adhkar: 20, Fajr: 80, Sport: 80  },
  { month: "April", Quran: 73, Adhkar: 90, Fajr: 97, Sport: 10  },
  { month: "May", Quran: 20, Adhkar: 30, Fajr: 100, Sport: 20  },
  { month: "June", Quran: 15, Adhkar: 40, Fajr: 20, Sport: 35  },
]

const chartConfig = {
  Quran: {
    label: "Quran",
    color: "var(--chart-1)",
  },
  Adhkar: {
    label: "Adhkar",
    color: "var(--chart-2)",
  },
  Fajr: {
    label: "Fajr",
    color: "var(--chart-3)",
  },
  Sport: {
    label: "Sport",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig

function AppLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Habits Journey</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="Quran"
              type="monotone"
              stroke="var(--color-Quran)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="Adhkar"
              type="monotone"
              stroke="var(--color-Adhkar)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="Fajr"
              type="monotone"
              stroke="var(--color-Fajr)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="Sport"
              type="monotone"
              stroke="var(--color-Sport)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 3.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Showing Progression for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default AppLineChart;
