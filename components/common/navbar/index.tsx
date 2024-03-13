"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { AlignLeftIcon, HeartIcon, ShoppingCartIcon, UserRoundIcon } from "lucide-react"

export const Navbar = () => {
    const components: { title: string; href: string; description: string }[] = [
        {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description: "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
            title: "Hover Card",
            href: "/docs/primitives/hover-card",
            description: "For sighted users to preview content available behind a link.",
        },
        {
            title: "Progress",
            href: "/docs/primitives/progress",
            description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
            title: "Scroll-area",
            href: "/docs/primitives/scroll-area",
            description: "Visually or semantically separates content.",
        },
        {
            title: "Tabs",
            href: "/docs/primitives/tabs",
            description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        },
        {
            title: "Tooltip",
            href: "/docs/primitives/tooltip",
            description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        },
    ]

    return (
        <nav className="fixed top-0 p-5 lg:px-10 w-full bg-black z-50">
            <div className="mx-auto max-w-screen-xl">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-8">
                        <Link href="/">
                            <Image
                                src="/svg/logo.svg"
                                width="100"
                                height="40"
                                alt="Logo"
                            />
                        </Link>
                        <div className="hidden lg:flex">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem className="text-white">
                                        <NavigationMenuTrigger className="bg-black focus:bg-black focus:text-white hover:bg-black hover:text-white data-[state=open]:bg-zinc-950 data-[state=open]:text-white">
                                            Our menu
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="bg-black border-none">
                                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] border-none">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-yellow-200 to-yellow-500 p-6 no-underline outline-none focus:shadow-md"
                                                            href="/our-menu"
                                                        >
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                Our menu
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                Breakfast, lunch, dinner, pastries and more.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                                <ListItem href="/our-menu" title="Breakfast">
                                                   More than 30 breakfast options with sides.
                                                </ListItem>
                                                <ListItem href="/our-menu" title="Lunch">
                                                    More than 40 lunch options with special drinks or juices.
                                                </ListItem>
                                                <ListItem href="/our-menu" title="Diner">
                                                    More than 40 diner options with special drinks or juices.
                                                </ListItem>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem className="text-white">
                                        <NavigationMenuTrigger className="bg-black focus:bg-black focus:text-white hover:bg-black hover:text-white data-[state=open]:bg-zinc-950 data-[state=open]:text-white">
                                            Institutional
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="bg-black border-none">
                                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-yellow-200 to-yellow-500 p-6 no-underline outline-none focus:shadow-md"
                                                            href="/our-history"
                                                        >
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                Institutional
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                Learn more about our history, employees, mission and values.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                                <ListItem href="/our-history" title="Our history">
                                                    When we started, know where our restaurants are located and more.
                                                </ListItem>
                                                <ListItem href="/our-chefs" title="Chefs">
                                                    Get to know our chefs, their skills and specialties.
                                                </ListItem>
                                                <ListItem href="/location" title="Location of restaurants">
                                                    Find out where our restaurants are located.
                                                </ListItem>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem className="text-white">
                                        <NavigationMenuTrigger className="bg-black focus:bg-black focus:text-white hover:bg-black hover:text-white data-[state=open]:bg-zinc-950 data-[state=open]:text-white">
                                            Sign in or sign up
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="bg-black border-none">
                                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-yellow-200 to-yellow-500 p-6 no-underline outline-none focus:shadow-md"
                                                            href="/sign-in"
                                                        >
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                User actions
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                Create your account, log in and book a table for a special date.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                                <ListItem href="/sign-in" title="Sign in">
                                                    Access your account in a simple and secure way.
                                                </ListItem>
                                                <ListItem href="/sign-up" title="Sign Up">
                                                    Create your account in a simple and secure way.
                                                </ListItem>
                                                <ListItem href="/book-a-table" title="Book a table">
                                                    Book a table.
                                                </ListItem>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="lg:hidden">
                            <AlignLeftIcon className="w-8 h-8 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-[#111]",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})

ListItem.displayName = "ListItem"