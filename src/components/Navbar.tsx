import { Moon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {



    return(
        <nav className="flex items-center justify-between py-4 mr-4">
            CollapsButton

            <div className="flex items-center gap-4">
                Dashboard
                <Moon/>
                <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>


        </nav>

    )
}
export default Navbar;