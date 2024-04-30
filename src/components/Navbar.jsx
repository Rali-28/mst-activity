import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

const Navbar = () => {
  const alert = () => {
    toast.error("Self-Check 2.2.1 not found in given module.")
  }

  return (
    <nav>
      <Toaster position="top-center" />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <a href="/activity1">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Activity 2.1.1
              </NavigationMenuLink>
            </a>
              <NavigationMenuLink className={`cursor-pointer ${navigationMenuTriggerStyle()}`} onClick={alert}>
                Activity 2.1.1
              </NavigationMenuLink>
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
