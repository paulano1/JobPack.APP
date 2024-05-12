"use client";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import  ThemeToggle  from "@/components/layout/ThemeToggle/theme-toggle";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-jetpack"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 6a3 3 0 1 0 -6 0v7h6v-7z" /><path d="M14 13h6v-7a3 3 0 0 0 -6 0v7z" /><path d="M5 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" /><path d="M15 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" /><path d="M10 8h4" /><path d="M10 11h4" /></svg>
          
              Job Pack
            </a>
            
          </NavigationMenuItem>
          <NavigationMenuItem className="font-bold flex">
            <ThemeToggle/>
            
          </NavigationMenuItem>

          {/* mobile */}
          {/* <span className="flex md:hidden">
            

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                
              </SheetContent>
            </Sheet>
          </span> */}

          {/* desktop */}
          

          
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};