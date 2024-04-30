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
    <nav className="px-6 py-3 w-screen backdrop-blur-sm">
      <div className="flex justify-between items-center">
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.index}>
                <a href={link.link} className={navigationMenuTriggerStyle()}>
                    {link.title}
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
         <Navmobile />
         <ModeToggle/>   
      </div>
    </nav>
  );
};

export default Navbar;
