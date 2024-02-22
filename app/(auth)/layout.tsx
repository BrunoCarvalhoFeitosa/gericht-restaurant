"use client"
import { Fragment, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Mousewheel, Autoplay } from "swiper/modules"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
    }, [])

    return (
        <Fragment>
            {isLoading && (
                <div className="flex justify-between w-full min-h-[100dvh] xl:min-h-full xl:max-h-[100dvh] bg-black overflow-hidden">
                    <div className="flex justify-center items-center w-full xl:w-[60%]">
                        {children}
                    </div>
                    <div className="hidden xl:flex flex-1 text-white">
                        <Swiper
                            direction={"vertical"}
                            keyboard={{ enabled: true }}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            slidesPerView={3}
                            grabCursor={true}
                            mousewheel={true}
                            loop={true}
                            modules={[Pagination, Autoplay, Mousewheel]}
                        >
                            <SwiperSlide className="pr-5">
                                <img
                                    src="/images/plate-decorated-02.png"
                                    className=""
                                />
                            </SwiperSlide>
                            <SwiperSlide className="pr-5">
                                <img
                                    src="/images/plate-decorated-02.png"
                                    className=""
                                />
                            </SwiperSlide>
                            <SwiperSlide className="pr-5">
                                <img
                                    src="/images/plate-decorated-02.png"
                                    className=""
                                />
                            </SwiperSlide>
                            <SwiperSlide className="pr-5">
                                <img
                                    src="/images/plate-decorated-02.png"
                                    className=""
                                />
                            </SwiperSlide>
                            <SwiperSlide className="pr-5">
                                <img
                                    src="/images/plate-decorated-02.png"
                                    className=""
                                />
                            </SwiperSlide>
                            <SwiperSlide className="pr-5">
                                <img
                                    src="/images/plate-decorated-02.png"
                                    className=""
                                />
                            </SwiperSlide>
                            <SwiperSlide className="pr-5">
                                <img
                                    src="/images/plate-decorated-02.png"
                                    className=""
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            )}
        </Fragment>
    )
}
 
export default AuthLayout