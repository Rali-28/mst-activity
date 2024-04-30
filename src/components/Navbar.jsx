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

const Navbar = () => {
  return (
    <nav className="px-4 py-3 w-screen backdrop-blur-sm">
      <div>
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
      </div>
    </nav>
  );
};

export default Navbar;
