"use client"
import Link from "next/link"
import { ChevronRightIcon } from "lucide-react"

interface BreadcrumbProps {
    title: string
    pathname: string
}

export const Breadcumb = ({ title, pathname }: BreadcrumbProps) => {
    return (
        <section className="pt-36 md:pt-48 px-8 pb-24 md:pb-32 bg-[#030303]">
            <div className="text-center">
                <h1 className="font-cormorant capitalize text-5xl font-bold text-white">
                    {title}
                </h1>
                <ul className="mt-4 flex justify-center items-center gap-x-1">
                    <li className="font-bold text-gray-400">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="font-extrabold text-[#DCCA87]">
                        <ChevronRightIcon className="w-5 h-5" />
                    </li>
                    <li className="capitalize font-bold text-[#DCCA87]">
                        <Link href={pathname}>
                            {title}
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}