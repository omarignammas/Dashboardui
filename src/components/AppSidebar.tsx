import { Calendar, ChevronDown, ChevronUp, Home, Inbox, LogOut, Plus, PlusCircle, Projector, Search, Settings, Settings2, User2 } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSubItem, SidebarSeparator } from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import FaundyDark from '../assets/FaundyDark.png';
import Faundy from '../assets/Faundy.png'
import { DropdownMenu, DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

// Menu items.
const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ]



const AppSidebar = () => {

    return(
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                            <Image src={Faundy} alt="logo" width={50} className="hidden dark:block object-contain" height={50} />
                            <Image src={FaundyDark} alt="logo" width={50} className="block dark:hidden object-contain" height={50} />

                            <span className="-ml-4 text-md font-bold">Faundy Dash</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarSeparator/>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
            <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>

                                <Link href="/">
                                    <Projector/>
                                    See All Projects
                                </Link>

                            </SidebarMenuButton>
                            
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>

                                <Link href="/">
                                    <PlusCircle/>
                                    Add Project
                                </Link>

                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel asChild>

          <CollapsibleTrigger>
             Program routines
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>

          </SidebarGroupLabel>
           
          <CollapsibleContent>
         
          <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>

                                <Link href="/">
                                    <Projector/>
                                    See All Routines
                                </Link>

                            </SidebarMenuButton>
                            
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>

                                <Link href="/">
                                    <PlusCircle/>
                                    Add Routine
                                </Link>

                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
          </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
        </Collapsible>
      </SidebarContent>
          </SidebarGroup>
          
        </SidebarContent>
        <SidebarSeparator/>
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton>
                                <User2/>
                                 Omar Ignammas
                                 <ChevronUp className="ml-auto"/>
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end"  sideOffset={13}>
                            <DropdownMenuItem>
                                <User2/>
                                Account
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings2/>
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuItem variant="destructive">
                                <LogOut/>
                                logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>

        </SidebarFooter>
      </Sidebar>
    )

}
export default AppSidebar;