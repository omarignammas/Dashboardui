import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-4 gap-4">

      <div className="bg-primary-foreground p-4 rounded-lg"><AppBarChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppAreaChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
      
    </div>
  );
}
