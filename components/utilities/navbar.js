import React from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { Icons } from "@/components/icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
// import { ModeToggle } from "@/components/utilities/mode-toggle";

import { cn } from "@/lib/utils";

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

const infolinks = [
  {
    title: "First Time Homebuyers",
    href: "/first-time-homebuyers",
    description: "Our step-by-step guide for first time homebuyers",
  },
  {
    title: "Home Marketing Guide",
    href: "/home-marketing-guide",
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
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
];
const services = [
  {
    title: "Buy",
    href: "/listings",
    description: "Browse Coastal Bend Listings and find your dream home",
  },
  {
    title: "Sell",
    href: "/sell",
    description: "List your home with Gomez Properties and get top dollar",
  },
  {
    title: "Rent",
    href: "/rentals",
    description: "Find Your Next Rental and start an application online",
  },
];

// Functions

export function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
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
export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Getting Started */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
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
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Info and Tools */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Info / Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]  ">
              {infolinks.map((infolink) => (
                <ListItem
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
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Contact */}
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
              "line-clamp-2 text-sm leading-snug text-muted-foreground",
          },
          children,
        ),
      ),
    ),
  );
});
ListItem.displayName = "ListItem";

export default function Navbar() {
  const { setTheme } = useTheme();
  return (
    <nav className="sticky top-0 border-b backdrop-blur-sm bg-white/80 dark:bg-black/70 ">
      <div className="flex py-3 px-4 items-center justify-between w-full ">
        <div>
          <a href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="text-lg font-medium">kngdm/re</span>
          </a>
        </div>

        <div className="flex items-center space-x-3 ">
          <span className="hidden sm:flex ">
            <NavigationMenuDemo />
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex">
            <ModeToggle />
          </div>
          <Button variant="outline">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
