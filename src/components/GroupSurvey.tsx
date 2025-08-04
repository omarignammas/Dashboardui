"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";


// ✅ Zod Schema
const formSchema = z.object({
  habits: z.array(
    z.object({
      habitId: z.string().min(1, "Please select a habit"),
      progress: z.string().min(1, "Please enter progress")
    })
  )
});
export const Habits = [
    { id: "1", label: "1 hours Lifting" },
    { id: "2", label: "30 min Journaling" },
    { id: "3", label: "1h Startup work" },
    // Add more as needed
  ];
  

export default function GroupSurveyForm() {
  
  const [habitInputs, setHabitInputs] = useState([
    { habitId: "", progress: "" }
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      habits: []
    }
  });

  // ✅ Sync form state with local state
  useEffect(() => {
    form.setValue("habits", habitInputs);
  }, [habitInputs]);

  const handleHabitChange = (
    index: number,
    field: "habitId" | "progress",
    value: string
  ) => {
    const updated = [...habitInputs];
    updated[index][field] = value;
    setHabitInputs(updated);
    form.setValue("habits", updated); // sync to form
  };
  

  const handleAddHabit = () => {
    setHabitInputs([...habitInputs, { habitId: "", progress: "" }]);
  };

  // ✅ On Submit
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const payload = {
      habits: data.habits
    };

    try {
      const res = await fetch("/api/group-survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        //toast.success("Survey submitted!");
        setHabitInputs([{ habitId: "", progress: "" }]);
        form.reset();
      } else {
        //toast.error("Something went wrong");
      }
    } catch (error) {
      //toast.error("Error submitting survey");
    }
  };

  return (
    <DialogContent>
        <DialogTitle>Group Survey Sheet</DialogTitle>
        <DialogHeader>
        <DialogDescription asChild>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {habitInputs.map((habit, index) => (
                    <div key={index} className="flex gap-4 items-end">
                        <FormField
                        control={form.control}
                        name={`habits.${index}.habitId`}
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Habit</FormLabel>
                            <FormControl>
                                <select
                                value={habit.habitId}
                                onChange={(e) =>
                                    handleHabitChange(index, "habitId", e.target.value)
                                }
                                className="border px-2 py-2 rounded-md"
                                >
                                <option value="">Select a habit</option>
                                {Habits.map((h) => (
                                    <option key={h.id} value={h.id}>
                                    {h.label}
                                    </option>
                                ))}
                                </select>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField
                        control={form.control}
                        name={`habits.${index}.progress`}
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Progress (%)</FormLabel>
                            <FormControl>
                                <Input
                                type="number"
                                placeholder="Enter progress"
                                value={habit.progress}
                                onChange={(e) =>
                                    handleHabitChange(index, "progress", e.target.value)
                                }
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    ))}

                    <Button type="button" onClick={handleAddHabit} className="mt-2">
                      Add Another Habit
                    </Button>

                    <Button type="submit" className="w-full">
                      Submit Survey
                    </Button>
                </form>
            </Form>

        </DialogDescription>


        </DialogHeader>





    </DialogContent>
   
  );
}
