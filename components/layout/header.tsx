import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden lg:block">
         
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-jetpack"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 6a3 3 0 1 0 -6 0v7h6v-7z" /><path d="M14 13h6v-7a3 3 0 0 0 -6 0v7z" /><path d="M5 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" /><path d="M15 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" /><path d="M10 8h4" /><path d="M10 11h4" /></svg>
          
        </div>
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
