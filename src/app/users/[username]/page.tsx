import CardList from "@/components/CardList";
import EditUser from "@/components/EditUser";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";import 
{ BadgeCheck, Candy, Citrus, Shield } from "lucide-react";


const SingleUserPage = () => {


    return (
        <div>

        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                    <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Omar Ignammas</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-4 flex flex-col xl:flex-row gap-8">

            <div className="w-full xl:w-1/3 space-y-6">

            <div className="bg-primary-foreground p-4 rounded-lg">

                <h1>User Badges</h1>
                <div className="flex gap-4 mt-4">
                    <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className="bg-blue-500/30 rounded-full border-1 border-blue-500/50 p-2"/>
                                </HoverCardTrigger>

                                <HoverCardContent>
                                    <h1 className="font-bold mb-2 flex gap-1">Verified User</h1>
                                    <p className="text-sm text-muted-foreground ">This user has been verified by the admin.</p>
                                    
                                </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                                <HoverCardTrigger>
                                    <Citrus size={36} className="bg-yellow-500/30 rounded-full border-1 border-yellow-500/50 p-2"/>
                                </HoverCardTrigger>

                                <HoverCardContent>
                                    <h1 className="font-bold mb-2 flex gap-1">Admin</h1>
                                    <p className="text-sm text-muted-foreground ">This user has been verified us admin.</p>
                                    
                                </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                                <HoverCardTrigger>
                                    <Candy size={36} className="bg-green-500/30 rounded-full border-1 border-green-500/50 p-2"/>
                                </HoverCardTrigger>

                                <HoverCardContent>
                                    <h1 className="font-bold mb-2 flex gap-1">Awarded</h1>
                                    <p className="text-sm text-muted-foreground ">This user has been awarded for their descipline.</p>
                                    
                                </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                                <HoverCardTrigger>
                                    <Shield size={36} className="bg-red-500/30 rounded-full border-1 border-red-500/50 p-2"/>
                                </HoverCardTrigger>

                                <HoverCardContent>
                                    <h1 className="font-bold mb-2 flex gap-1">Popular</h1>
                                    <p className="text-sm text-muted-foreground ">This user has been Popular in the community.</p>
                                    
                                </HoverCardContent>
                    </HoverCard>

                </div>


            </div>

            <div className="bg-primary-foreground p-4 rounded-lg">
                <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">User Information</h1>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="text-sm font-bold">Edit Profile</Button>
                    </SheetTrigger>
                     <EditUser/>
                </Sheet>

                </div>
                
               <div className="space-y-4 mt-4">

               <div className="flex flex-col gap-2 mb-8">
                    <p className="text-sm text-muted-foreground">profile completion</p>
                    <Progress value={76}/>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Username:</span>
                    <span>Omar.Ignammas</span>

                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Email:</span>
                    <span>Omar.Ignammas@gmail.com</span>

                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Phone:</span>
                    <span>+2126 4836 4140</span>

                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Location:</span>
                    <span>Rabat, Morocco</span>

                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Role:</span>
                    <Badge>Admin</Badge>

                </div>

                <p className="text-sm mt-4 text-muted-foreground">Join on 2025.10.08</p>
                
                
                </div> 
                
            </div>


            <div className="bg-primary-foreground p-4 rounded-lg">
                <CardList title="User Progression"/>

            </div>
                
            </div>   

            <div className="w-full xl:w-2/3 space-y-6">

            <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>

            <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
            
            
            </div> 


        </div>



            
        </div>
        

    )
}

export default SingleUserPage ;