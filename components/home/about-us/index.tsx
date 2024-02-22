"use client"
import { MoveRightIcon } from "lucide-react"

export const AboutUs = () => {
    return (
        <section className="py-16 bg-about-us">
            <div className="mx-auto max-w-screen-xl flex flex-col xl:flex-row justify-around items-center gap-x-40 gap-y-20">
                <div className="flex flex-col items-center xl:items-end xl:w-2/6 text-center xl:text-end">
                    <h2 className="font-cormorant text-3xl md:text-6xl lg:text-6xl font-bold text-[#DCCA87]">
                        About Us
                    </h2>
                    <p className="mt-5 lg:mt-10 text-sm w-[70%] lg:text-base text-[#AAA] leading-6">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                        eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                        quidem quam repellat.
                    </p>
                    <a
                        href="#"
                        className="mt-8 flex items-center justify-end gap-x-3 bg-[#DCCA87] px-12 py-3 font-cormorant text-lg font-medium w-fit transition focus:outline-none focus:ring"
                    >
                        Know More
                        <MoveRightIcon className="w-5 h-5" />
                    </a>
                </div>
                <div className="flex justify-center flex-1">
                    <img
                        src="/images/about-us-knife-image.png"
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col items-center xl:items-start xl:w-2/6 text-center xl:text-start">
                    <h2 className="font-cormorant text-3xl md:text-6xl lg:text-6xl font-bold text-[#DCCA87]">
                        Our History
                    </h2>
                    <p className="mt-5 lg:mt-10 text-sm w-[70%] lg:text-base text-[#AAA] leading-6">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                        eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                        quidem quam repellat.
                    </p>
                    <a
                        href="#"
                        className="mt-8 flex items-center justify-end gap-x-3 bg-[#DCCA87] px-12 py-3 font-cormorant text-lg font-medium w-fit transition focus:outline-none focus:ring"
                    >
                        Know More
                        <MoveRightIcon className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}