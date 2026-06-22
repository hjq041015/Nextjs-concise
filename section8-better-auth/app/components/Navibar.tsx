"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { UserButton } from "@/components/auth/user/user-button";

export function Navibar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        <NavigationMenuItem>
          <NavigationMenuLink
            className="text-lg font-medium px-4 py-2"
            render={<Link href="/">Home</Link>}
          ></NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex col-start-8">
          <UserButton className="text-base px-4 py-3" />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
