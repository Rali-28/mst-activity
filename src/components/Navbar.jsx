import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { links } from "./constants";
import Navmobile from "./Navmobile";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="px-6 py-3 w-screen border-b-[1px] backdrop-blur-sm sticky top-0 z-50">
      <div className="flex justify-between">
        <div className="hidden md:flex">
          <a href="/" className={navigationMenuTriggerStyle()}>Janaban</a>
          <NavigationMenu className="hidden md:flex flex-">
            <NavigationMenuList className="flex">
              {links.map((link) => (
                <NavigationMenuItem key={link.index}>
                  <a href={link.link} className={navigationMenuTriggerStyle()}>
                    {link.title}
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Navmobile />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
