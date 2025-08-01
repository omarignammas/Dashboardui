"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";




const TodoList = () => {

    const [date , setDate] = useState<Date | undefined>(new Date());
    const [open , setOpen] = useState(false)


    return (
        <div className="mb-2">
            <h1 className="font-medium mb-5">Habits TodoList</h1>
              <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button className="w-[95%]">
                            <CalendarIcon/>
                             {date ? format(date , "PPP") : <span>Pick a Date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(date) => (
                                setDate(date),
                                setOpen(false)
                            )}
                            className="rounded-md  shadow-sm"
                            captionLayout="dropdown"
                            required
                            />
                    </PopoverContent>
             </Popover>
        <ScrollArea className="max-h-[350px] mt-4 p-2 overflow-y-auto">
           

            <div className="flex flex-col gap-4">

                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item1" checked />
                        <label htmlFor="item1" className="text-sm text-muted-foreground">
                              Exercise or do physical activity 15+ mins
                        </label>

                    </div>
                    
                </Card>

                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item2"  />
                        <label htmlFor="item2" className="text-sm text-muted-foreground">
                            Project Metting with IslamWare Startup
                        </label>

                    </div>
                    
                </Card>

                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item3"  />
                        <label htmlFor="item3" className="text-sm text-muted-foreground">
                              Morning & Evening Adhkar (Daily Remembrances)
                        </label>

                    </div>
                    
                </Card>

                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item4"  />
                        <label htmlFor="item4" className="text-sm text-muted-foreground">
                              Read 10 pages of a book
                        </label>

                    </div>
                    
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item5"  />
                        <label htmlFor="item5" className="text-sm text-muted-foreground">
                        Recite Quran (at least 1 page or 10 verses) Project Metting with IslamWare Startup
                        </label>

                    </div>
                    
                </Card>
                <Card className="p-4">
                    <div className="flex items-center gap-4">
                        <Checkbox id="item6"  />
                        <label htmlFor="item6" className="text-sm text-muted-foreground">
                             Programming Course session
                        </label>

                    </div>
                    
                </Card>


            </div>

        </ScrollArea>
           

        </div>


    )
}
export default TodoList;