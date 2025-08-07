"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"



  
const formSchema = z.object({
      username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
         message: "email not correct." 
        }),
    phone: z.string().max(15).min(10, {
        message: "Username must be max 15 characters.",
      }),
    location: z.string().max(20, {
        message: "location must be maximum 20 characters.",
      }),
    role: z.enum(["admin","user"]),
    
  })


const EditUser = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "omar ignammas",
          email: "omar.ignammas@uit.ac.ma",
          phone: "+2126 483 4140",
          location : "Rabat, morocco",
          role : "admin"   

        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }


    return(
            <SheetContent>
                        <SheetHeader>
                        <SheetTitle className="mb-4">Edit profile</SheetTitle>
                        <SheetDescription asChild>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                          
                                <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Only admin can view your email.
                                    </FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                           

                                <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                    
                                <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>location</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public location.
                                    </FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                        <SelectItem value="admin">admin</SelectItem>
                                        <SelectItem value="user">user</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />

                            </form>
                            <Button type="submit">Save changes</Button>
                        </Form>
                        </SheetDescription>
                        </SheetHeader>
                        
                       
            </SheetContent>
    )
}

export default EditUser;