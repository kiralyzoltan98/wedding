import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";
import floral from "../../assets/floral.jpg"
import { Card, CardContent } from "../ui/card";

export default function Nav() {
    return (
    <div>
        <div>
            <img src={floral} alt="floral"></img>
        </div>
        <NavigationMenu className="hidden sm:flex">
            <Card className="absolute mb-[30%] transparent_glass backdrop-blur-[6px]">
                <CardContent>
                    <NavigationMenuList className="flex gap-5">
                        <NavigationMenuItem>
                            <Link to="/">
                                <Button variant="outline" className="ml-5"> Home </Button>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/agenda">
                                <Button variant="outline"> Agenda </Button>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/invitation">
                                <Button variant="outline"> Invitation </Button>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/upload">
                                <Button variant="outline"> Upload </Button>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to="/guestList">
                                <Button variant="outline" className="mr-5"> Guest List </Button>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </CardContent>
            </Card>
        </NavigationMenu>
    </div>
    )
}