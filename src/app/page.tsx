import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import ChartRadialLabel from "@/components/ChartRadialLabel";
import ChartAreaInteractive from "@/components/ChartAreaInteractive";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">

      <div className="col-span-1 lg:col-span-2 2xl:col-span-4 bg-primary-foreground  rounded-lg">
        <ChartAreaInteractive />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppBarChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><ChartRadialLabel/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppAreaChart /></div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
      
    </div>
  )

}
