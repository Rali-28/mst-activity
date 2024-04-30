import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navmobile = () => {
  return (
    <div className="md:hidden">
      <Sheet side="left">
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left">
            <SheetTitle>MENU</SheetTitle>
            <SheetDescription>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="flex flex-col">
                    <a href="/selfcheck1" className="pt-4">
                      <NavigationMenuLink>Self-Check 2.1.1</NavigationMenuLink>
                    </a>
                    <a href="/selfcheck2-a" className="pt-4">
                      <NavigationMenuLink>Self-Check 2.2.1</NavigationMenuLink>
                    </a>
                    <a href="/selfcheck2-b" className="pt-4">
                      <NavigationMenuLink>Self-Check 2.2.2</NavigationMenuLink>
                    </a>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navmobile;
