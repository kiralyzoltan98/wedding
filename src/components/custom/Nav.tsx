import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";

function Nav() {
    return (
    <>
        <NavigationMenu>
            <NavigationMenuList className="max-w-full">
                <NavigationMenuItem>
                    <Link to="/">
                        <Button variant="ghost"> Home </Button>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/agenda">
                        <Button variant="ghost" className="ml-5"> Agenda </Button>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/invitation">
                        <Button variant="ghost" className="ml-5"> Invitation </Button>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/upload">
                        <Button variant="ghost" className="ml-5"> Upload </Button>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/guestList">
                        <Button variant="ghost" className="ml-5"> Guest List </Button>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </>
    )
}

export default Nav;