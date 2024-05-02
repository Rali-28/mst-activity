import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { links } from "./constants";

const Navmobile = () => {
  return (
    <div className="md:hidden">
      <Sheet side="left">
        <SheetTrigger><Menu /></SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left">
            <a href="/"><SheetTitle className="mb-4">Janaban</SheetTitle></a>
              <SheetDescription className="flex flex-col pl-6 text-base gap">
                <span className="font-medium text-foreground">Activities</span>
                {links.map((link) => (
                  <a key={link.index} href={link.link} className="mt-3">
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
