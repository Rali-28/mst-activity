import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const Navbar = () => {
  const alert = () => {
    toast.error("Self-Check 2.2.1 not found in given module.");
  };

  return (
    <nav className="flex justify-center items-center py-2 mx-auto w-11/12 bg-white backdrop-blur-sm">
      <Toaster position="top-center" />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <a href="/selfcheck1">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Self-Check 2.1.1
              </NavigationMenuLink>
            </a>
            <NavigationMenuLink
              className={`cursor-pointer ${navigationMenuTriggerStyle()}`}
              onClick={alert}
            >
              Self-Check 2.2.1
            </NavigationMenuLink>
            <a href="/selfcheck2-b">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Self-Check 2.2.2
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> unnecessary
    </nav>
  );
};

export default Navbar;
