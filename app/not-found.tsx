"use client"
import Link from "next/link"
import { Navbar } from "@/components/common/navbar"

const NotFoundPage = () => {
    return (
        <section>
            <Navbar />
            <div className="h-[100dvh] w-full bg-black">
                <div className="flex flex-col justify-center items-center w-full h-[calc(100%-60px)]">
                    <h1 className="text-[70px] font-bold leading-none text-[#DCCA87]">
                        404
                    </h1>
                    <h2 className="text-[15px] leading-none text-white">
                        Ooops, page not found.
                    </h2>
                    <button
                        type="button"
                        className="mt-5 font-cormorant text-xl font-bold bg-[#DCCA87]"
                    >
                        <Link
                            href="/"
                            className="px-10 py-4 flex justify-center items-center w-full h-full outline-none"
                        >
                            Go to home
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default NotFoundPage