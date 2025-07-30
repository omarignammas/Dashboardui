import AppBarChart from "@/components/AppBarChart";
import ChartRadialLabel from "@/components/ChartRadialLabel";
import ChartAreaInteractive from "@/components/ChartAreaInteractive";
import CardList from "@/components/CardList";

export default function Home() {
  return (
    <div className="font-sans grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-6 gap-4">
      
      {/* 1 carte seule sur une ligne */}
      <div className="col-span-1 md:col-span-2 2xl:col-span-6 bg-primary-foreground p-4 rounded-lg">
        <ChartAreaInteractive />
      </div>

      {/* 2 cartes sur la même ligne */}
      <div className="bg-primary-foreground p-4 rounded-lg col-span-1 md:col-span-1 2xl:col-span-3">
      <ChartRadialLabel />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg col-span-2 md:col-span-1 2xl:col-span-3">
        <AppBarChart />
      </div>

      {/* 3 cartes sur la même ligne */}
      <div className="bg-primary-foreground p-4 rounded-lg col-span-1 2xl:col-span-1">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg col-span-1 2xl:col-span-1">
        <CardList title="Users Progression" />
      </div>
      

    </div>
  );
   
  

}
