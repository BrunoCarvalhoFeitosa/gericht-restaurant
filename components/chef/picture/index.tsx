"use client"
import { Chef } from "@/types"

interface AboutProps {
    data: Chef
}

export const Picture = ({ data }: AboutProps) => {
    return (
        <div className="flex-1 border-2 border-[#DCCA87] overflow-hidden">
            <img
                src={data.picture}
                alt={data.name.toUpperCase()}
                title={data.name.toUpperCase()}
                className="w-full h-full hover:scale-125 transition-all duration-300 cursor-zoom-in"
            />
        </div>
    )
}