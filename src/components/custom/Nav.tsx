import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";
import floral from "../../assets/floral.jpg"
import { Card, CardContent } from "../ui/card";
import HamburgerMenu from "./HamburgerMenu";
import React from "react";

export default function Nav() {
    const [open, setOpen] = React.useState(false)

    return (
    <div>
        <div className="md:hidden absolute top-0 right-0 content-center align-middle size-13 transparent_glass backdrop-blur-[6px]" onClick={() => setOpen(!open)}>
            <HamburgerMenu open={open} />
        </div>
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