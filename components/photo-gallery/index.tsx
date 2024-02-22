"use client"
import CountUp from "react-countup"

export const PhotoGallery = () => {
    return (
        <section className="py-16 xl:py-28 w-full bg-black">
            <div className="mx-auto max-w-screen-xl grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
                <div className="flex flex-col items-center">
                    <div className="flex text-6xl xl:text-8xl font-cormorant font-bold text-[#DCCA87]">
                        <CountUp
                            start={0}
                            end={30}
                            duration={5}
                            enableScrollSpy
                        />
                        <span>
                            +
                        </span>
                    </div>
                    <p className="mt-4 text-sm text-white">
                        Breakfast options
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex text-6xl xl:text-8xl font-cormorant font-bold text-[#DCCA87]">
                        <CountUp
                            start={0}
                            end={40}
                            duration={7}
                            enableScrollSpy
                        />
                        <span>
                            +
                        </span>
                    </div>
                    <p className="mt-4 text-sm text-white">
                        Lunch options
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex text-6xl xl:text-8xl font-cormorant font-bold text-[#DCCA87]">
                        <CountUp
                            start={0}
                            end={50}
                            duration={7}
                            enableScrollSpy
                        />
                        <span>
                            +
                        </span>
                    </div>
                    <p className="mt-4 text-sm text-white">
                        Dinner options
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex text-6xl xl:text-8xl font-cormorant font-bold text-[#DCCA87]">
                        <CountUp
                            start={0}
                            end={35}
                            duration={5}
                            enableScrollSpy
                        />
                        <span>
                            +
                        </span>
                    </div>
                    <p className="mt-4 text-sm text-white">
                        Drink options
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex text-6xl xl:text-8xl font-cormorant font-bold text-[#DCCA87]">
                        <CountUp
                            start={0}
                            end={15}
                            duration={5}
                            enableScrollSpy
                        />
                        <span>
                            +
                        </span>
                    </div>
                    <p className="mt-4 text-sm text-white">
                        Chef's
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex text-6xl xl:text-8xl font-cormorant font-bold text-[#DCCA87]">
                        <CountUp
                            start={0}
                            end={60}
                            duration={5}
                            enableScrollSpy
                        />
                        <span>
                            +
                        </span>
                    </div>
                    <p className="mt-4 text-sm text-white">
                        Tables
                    </p>
                </div>
            </div>
        </section>
    )
}