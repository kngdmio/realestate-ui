"use client";

import React from "react";
import Link from "next/link";
import {
  Moon,
  Sun,
  DollarSign,
  Search,
  X,
  Linkedin,
  Facebook,
  Menu,
} from "lucide-react";
import { Icons } from "@/components/icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import SearchBundle from "./SearchBundle";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";

// shadcn-ui Imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Dropdown Links Data

const infolinks = [
  {
    title: "First Time Homebuyers",
    href: "/fthb",
    description: "Our step-by-step guide for first time homebuyers",
  },
  {
    title: "Home Marketing Guide",
    href: "/sell",
    description: "Learn what makes our marketing strategy unique and effective",
  },
  {
    title: "Frequently Asked Questions",
    href: "/faq",
    description:
      "Answers to common questions about buying and selling real estate",
  },
  {
    title: "Mortgage Calculator",
    href: "/mortgage-calculator",
    description: "Calculate your monthly mortgage payment with our tool",
  },
  // {
  //   title: "Careers",
  //   href: "/careers",
  //   description: "Join our team and start a rewarding career in real estate",
  // },
  // {
  //   title: "Our Team",
  //   href: "/team",
  //   description: "Meet the Kngdm/RE team and learn about our agents",
  // },
];
const services = [
  {
    title: "Buy",
    href: "/listings",
    description: "Browse Local Listings and find your dream home",
  },
  {
    title: "Sell",
    href: "/sell",
    description: "List your home with Kngdm/RE and get top dollar",
  },
  {
    title: "Rent",
    href: "/rent",
    description: "Find Your Next Rental and start an application online",
  },
];

// Functions

export function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    // Dark Mode Dropdown
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="hidden sm:flex" variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Getting Started */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-semibold">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/sell"
                  >
                    <DollarSign className="h-6 w-6 -rotate-6 opacity-60 text-green-500" />
                    <DollarSign className="absolute left-16 rotate-12 top-28 opacity-40 h-6 w-6 text-green-500" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      What is Your Home Worth?
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Find out how much your home is worth in today's market
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {services.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                >
                  <div className="">{service.description}</div>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Info */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium">
            Info
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {infolinks.map((infolink) => (
                <ListItem
                  className="text-sm"
                  key={infolink.title}
                  title={infolink.title}
                  href={infolink.href}
                >
                  {infolink.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Blog */}
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className="text-sm font-semibold">Blog</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Contact */}
        <NavigationMenuItem>
          <Link href="/team" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className="text-sm font-semibold">Our Team</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Careers */}
        <NavigationMenuItem>
          <Link href="/careers" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className="text-sm font-semibold">Careers</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Contact */}
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className="text-sm font-semibold">Contact</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef((props, ref) => {
  const { className, title, children, ...rest } = props;

  return React.createElement(
    "li",
    null,
    React.createElement(
      NavigationMenuLink,
      { asChild: true },
      React.createElement(
        "a",
        {
          ref: ref,
          className: cn(
            "block select-none space-y-1 duration-200 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 text-accent-foreground/80 hover:text-accent-foreground/80 focus:bg-accent/60 focus:text-accent-foreground/60",
            className,
          ),
          ...rest,
        },
        React.createElement(
          "div",
          { className: "text-sm font-medium leading-none" },
          title,
        ),
        React.createElement(
          "p",
          {
            className:
              "line-clamp-2 text-sm leading-snug text-muted-foreground/70 ",
          },
          children,
        ),
      ),
    ),
  );
});
ListItem.displayName = "ListItem";

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
