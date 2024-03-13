"use client"
import { chefs } from "@/utils/chefs"
import { FacebookIcon, InstagramIcon, MoveRightIcon, TwitterIcon } from "lucide-react"
import Link from "next/link"

export const Chefs = () => {
    return (
        <section className="py-16 md:py-32 w-full bg-black">
            <div className="mx-auto px-10 md:px-0 md:max-w-screen-sm xl:max-w-screen-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {chefs.map((chef, index) => (
                            <div key={index} className="flex flex-col cursor-pointer">
                                <div className="relative group flex-1 border-2 border-[#DCCA87] overflow-hidden">
                                    <div>
                                        <img
                                            src={chef.picture}
                                            alt={chef.name}
                                            title={chef.name}
                                            className="brightness-50 group-hover:scale-125 transition-all duration-700"
                                        />
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 from-45% to-[#DCCA87]">
                                        <div className="relative w-full h-full">
                                            <div className="absolute left-[50%] translate-x-[-50%] bottom-10 w-full flex justify-center">
                                                <Link href={`/our-chefs/${chef.name}`}>
                                                    <button className="mt-8 flex items-center gap-x-3 bg-[#DCCA87] px-12 py-3 font-cormorant text-lg font-medium text-black w-fit transition focus:outline-none focus:ring">
                                                        Meet the chef
                                                        <MoveRightIcon className="w-5 h-5" />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div>
                                        <h3 className="font-cormorant text-4xl capitalize font-black">
                                            {chef.name}
                                        </h3>
                                        <p className="mt-2 text-lg italic text-[#AAA]">
                                            {chef.level}
                                        </p>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </section>
    )
}