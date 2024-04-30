import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <a href="/activity1">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Activity 2.1.1
              </NavigationMenuLink>
            </a>
            <a href="/activity2-a">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Activity 2.1.1
              </NavigationMenuLink>
            </a>
            <a href="/activity2-b">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Activity 2.1.1
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;
