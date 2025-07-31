"use client"

import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

  const Users = [
    {
      id: 1,
      title: "Math Teacher",
      badge: "Ali Mamdouh",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: 1400,
    },
    {
      id: 2,
      title: "Software Engineer",
      badge: "Samir Fatimi",
      image:
        "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: 2100,
    },
    {
      id: 3,
      title: "Medical Student",
      badge: "Omar Ignmas",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: 1300,
    },
    {
      id: 4,
      title: "Enterproneur",
      badge: "Hakim Rahimi",
      image:
        "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: 1400,
    },

  ];


const CardList = ({title}:{title:string}) => {
    const list = Users ;

    return (
        <div className="m-2">
            <h1 className="text-lg font-medium mt-3 ml-3 mb-6">{title}</h1>
            <ScrollArea className="h-100 p-2  w-[100%] rounded-md overflow-y-auto ">
            <div className="flex flex-col gap-2">
                
                {list.map( item => (


                    <Card key={item.id} className="flex-row gap-1 items-center justify-center ml-1 mr-1">
                        
                        <div className="h-12 w-12 ml-4 rounded-sm relative overflow-hidden">
                            <Image src={item.image} alt={item.title} fill className="object-cover"/>
                        </div>
                        <CardContent className="w-80 ">
                            <CardTitle>{item.badge}</CardTitle>
                            <Badge variant="secondary" className="mt-2" >{item.title}</Badge>
                            
                        </CardContent>
                        <CardFooter>{item.count / 100}%</CardFooter>
                    </Card>
          


                ))}
               
            </div>
            </ScrollArea>

        </div>
    )
}

export default CardList;