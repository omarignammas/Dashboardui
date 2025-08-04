"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button"
import { Sheet, SheetTrigger } from "./ui/sheet"
import EditUser from "./EditUser"
import GroupSurvey from "./GroupSurvey"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { format } from "date-fns"
import { Dialog, DialogTrigger } from "./ui/dialog"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", Group: 222, individual: 150 },
  { date: "2024-04-02", Group: 97, individual: 180 },
  { date: "2024-04-03", Group: 167, individual: 120 },
  { date: "2024-04-04", Group: 242, individual: 260 },
  { date: "2024-04-05", Group: 373, individual: 290 },
  { date: "2024-04-06", Group: 301, individual: 340 },
  { date: "2024-04-07", Group: 245, individual: 180 },
  { date: "2024-04-08", Group: 409, individual: 320 },
  { date: "2024-04-09", Group: 59, individual: 110 },
  { date: "2024-04-10", Group: 261, individual: 190 },
  { date: "2024-04-11", Group: 327, individual: 350 },
  { date: "2024-04-12", Group: 292, individual: 210 },
  { date: "2024-04-13", Group: 342, individual: 380 },
  { date: "2024-04-14", Group: 137, individual: 220 },
  { date: "2024-04-15", Group: 120, individual: 170 },
  { date: "2024-04-16", Group: 138, individual: 190 },
  { date: "2024-04-17", Group: 446, individual: 360 },
  { date: "2024-04-18", Group: 364, individual: 410 },
  { date: "2024-04-19", Group: 243, individual: 180 },
  { date: "2024-04-20", Group: 89, individual: 150 },
  { date: "2024-04-21", Group: 137, individual: 200 },
  { date: "2024-04-22", Group: 224, individual: 170 },
  { date: "2024-04-23", Group: 138, individual: 230 },
  { date: "2024-04-24", Group: 387, individual: 290 },
  { date: "2024-04-25", Group: 215, individual: 250 },
  { date: "2024-04-26", Group: 75, individual: 130 },
  { date: "2024-04-27", Group: 383, individual: 420 },
  { date: "2024-04-28", Group: 122, individual: 180 },
  { date: "2024-04-29", Group: 315, individual: 240 },
  { date: "2024-04-30", Group: 454, individual: 380 },
  { date: "2024-05-01", Group: 165, individual: 220 },
  { date: "2024-05-02", Group: 293, individual: 310 },
  { date: "2024-05-03", Group: 247, individual: 190 },
  { date: "2024-05-04", Group: 385, individual: 420 },
  { date: "2024-05-05", Group: 481, individual: 390 },
  { date: "2024-05-06", Group: 498, individual: 520 },
  { date: "2024-05-07", Group: 388, individual: 300 },
  { date: "2024-05-08", Group: 149, individual: 210 },
  { date: "2024-05-09", Group: 227, individual: 180 },
  { date: "2024-05-10", Group: 293, individual: 330 },
  { date: "2024-05-11", Group: 335, individual: 270 },
  { date: "2024-05-12", Group: 197, individual: 240 },
  { date: "2024-05-13", Group: 197, individual: 160 },
  { date: "2024-05-14", Group: 448, individual: 490 },
  { date: "2024-05-15", Group: 473, individual: 380 },
  { date: "2024-05-16", Group: 338, individual: 400 },
  { date: "2024-05-17", Group: 499, individual: 420 },
  { date: "2024-05-18", Group: 315, individual: 350 },
  { date: "2024-05-19", Group: 235, individual: 180 },
  { date: "2024-05-20", Group: 177, individual: 230 },
  { date: "2024-05-21", Group: 82, individual: 140 },
  { date: "2024-05-22", Group: 81, individual: 120 },
  { date: "2024-05-23", Group: 252, individual: 290 },
  { date: "2024-05-24", Group: 294, individual: 220 },
  { date: "2024-05-25", Group: 201, individual: 250 },
  { date: "2024-05-26", Group: 213, individual: 170 },
  { date: "2024-05-27", Group: 420, individual: 460 },
  { date: "2024-05-28", Group: 233, individual: 190 },
  { date: "2024-05-29", Group: 78, individual: 130 },
  { date: "2024-05-30", Group: 340, individual: 280 },
  { date: "2024-05-31", Group: 178, individual: 230 },
  { date: "2024-06-01", Group: 178, individual: 200 },
  { date: "2024-06-02", Group: 470, individual: 410 },
  { date: "2024-06-03", Group: 103, individual: 160 },
  { date: "2024-06-04", Group: 439, individual: 380 },
  { date: "2024-06-05", Group: 88, individual: 140 },
  { date: "2024-06-06", Group: 294, individual: 250 },
  { date: "2024-06-07", Group: 323, individual: 370 },
  { date: "2024-06-08", Group: 385, individual: 320 },
  { date: "2024-06-09", Group: 438, individual: 480 },
  { date: "2024-06-10", Group: 155, individual: 200 },
  { date: "2024-06-11", Group: 92, individual: 150 },
  { date: "2024-06-12", Group: 492, individual: 420 },
  { date: "2024-06-13", Group: 81, individual: 130 },
  { date: "2024-06-14", Group: 426, individual: 380 },
  { date: "2024-06-15", Group: 307, individual: 350 },
  { date: "2024-06-16", Group: 371, individual: 310 },
  { date: "2024-06-17", Group: 475, individual: 520 },
  { date: "2024-06-18", Group: 107, individual: 170 },
  { date: "2024-06-19", Group: 341, individual: 290 },
  { date: "2024-06-20", Group: 408, individual: 450 },
  { date: "2024-06-21", Group: 169, individual: 210 },
  { date: "2024-06-22", Group: 317, individual: 270 },
  { date: "2024-06-23", Group: 480, individual: 530 },
  { date: "2024-06-24", Group: 132, individual: 180 },
  { date: "2024-06-25", Group: 141, individual: 190 },
  { date: "2024-06-26", Group: 434, individual: 380 },
  { date: "2024-06-27", Group: 448, individual: 490 },
  { date: "2024-06-28", Group: 149, individual: 200 },
  { date: "2024-06-29", Group: 103, individual: 160 },
  { date: "2024-06-30", Group: 446, individual: 400 },
]

const chartConfig = {
  Habit: {
    label: "Habit",
  },
  Group: {
    label: "Group",
    color: "var(--chart-1)",
  },
  individual: {
    label: "individual",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d")
  const [date , setDate] = useState<Date | undefined>(new Date());

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        
        <div className="grid flex-1 gap-1">
        
          <CardTitle>Habits Tracking - Progression</CardTitle>
          <CardDescription>
            Showing Progress for the last 3 months
          </CardDescription>
        </div>
        <Dialog>
            <DialogTrigger asChild>
                <Button className="text-sm font-semibold">
                <CalendarIcon/>
                <h1>Group Survey - </h1>
                {date ? format(date , "PPP") : <span>Pick a Date</span>}
                </Button>
            </DialogTrigger>
            <GroupSurvey/>
        </Dialog>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
        
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillGroup" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Group)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Group)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillindividual" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-individual)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-individual)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="individual"
              type="natural"
              fill="url(#fillindividual)"
              stroke="var(--color-individual)"
              stackId="a"
            />
            <Area
              dataKey="Group"
              type="natural"
              fill="url(#fillGroup)"
              stroke="var(--color-Group)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default ChartAreaInteractive ;