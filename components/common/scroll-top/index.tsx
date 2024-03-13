"use client"
import { useScroll } from "@/hooks/use-scroll"

export const ScrollTop = () => {
    const scrolled = useScroll()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className="fixed bottom-4 right-4 md:bottom-7 md:right-8 z-[99]">
            <div
                role="button"
                onClick={scrollToTop}
                className={`${scrolled ? "flex" : "hidden"} flex-col gap-y-1 items-center hover:bg-transparent outline-none cursor-pointer`}
            >
                <div className="w-[2px] h-[60px] bg-gradient-to-b from-[#DCCA87] to-bg-yellow-500" />
                <span className="font-cormorant text-xl font-bold uppercase text-[#DCCA87]">
                    Top
                </span>
            </div>
        </div>
    )
}