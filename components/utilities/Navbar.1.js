"use client";
import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { NavMenu, ModeToggle } from "./navbar";

export default function Navbar() {
  return (
    <nav className=" w-full z-10 top-0 border-b backdrop-blur-sm bg-white/80 dark:bg-black/70 ">
      <div className=" max-w-screen-2xl m-auto flex py-3 px-4 items-center justify-between w-full ">
        {/* Nav Left */}
        <div className="flex items-center">
          <a href="/" className="flex flex-shrink items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="text-lg font-medium">kngdm/re</span>
          </a>

          <div className="ml-8">
            <span className="hidden sm:flex ">
              <NavigationMenu />
            </span>
            <div className="hidden sm:flex">
              <NavMenu />
            </div>
          </div>
        </div>

        {/* Nav Right */}

        <div className="flex flex-shrink-0 items-center space-x-2.5">
          {/* navbar input */}
          {/* <div className=" hidden sm:flex w-full flex-1">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-[12px] h-4 w-4 text-foreground" />
                  <Input
                    type="search"
                    placeholder="Browse by address..."
                    className="w-full appearance-none bg-muted-background pl-10 shadow-none text-foreground text-sm h-9"
                  />
                </div>
              </form>
            </div> */}

          <div className="flex items-center" items-center>
            <ModeToggle />

            {/* <Button
              size="sm"
              variant="ghost"
              className="hidden sm:flex cursor-pointer mx-0 "
            >
              <Linkedin size="16" />
            </Button>

            <Button
              size="sm"
              variant="ghost"
              className="hidden sm:flex cursor-pointer mx-0"
            >
              <Facebook size="16" />
            </Button> */}

            <Menu className="sm:hidden cursor-pointer" />
          </div>
          <Button size="sm" variant="outline" className="text-sm ">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
