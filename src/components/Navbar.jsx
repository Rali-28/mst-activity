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
import Navmobile from "./Navmobile";

const Navbar = () => {
  const alert = () => {
    toast.error("Self-Check 2.2.1 not found in given module.");
  };

  return (
    <nav className="px-4 py-3 w-screen backdrop-blur-sm">
      <Toaster position="top-center" />
      <div>
        <NavigationMenu className="hidden md:flex">
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
        </NavigationMenu>
        <Navmobile />
      </div>
    </nav>
  );
};

export default Navbar;
