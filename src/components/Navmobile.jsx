import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
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
import { links } from "./constants";

const Navmobile = () => {
  return (
    <div className="md:hidden">
      <Sheet side="left">
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left">
            <SheetTitle>MENU</SheetTitle>
            <SheetDescription className="flex flex-col">
              {links.map((link) => (
                <a key={link.index} href={link.link} className="pt-4">
                  {link.title}
                </a>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navmobile;
