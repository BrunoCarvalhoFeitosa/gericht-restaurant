"use client"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Keyboard } from "swiper/modules"
import { MoveRightIcon } from "lucide-react"

export const Hero = () => {
    const progressCircle = useRef<SVGSVGElement | null>(null)
    const progressContent = useRef<HTMLSpanElement | null>(null)

    const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
        progressCircle?.current?.style.setProperty('--progress', String(1 - progress))
        if (progressContent.current?.textContent) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
        }
    }

    return (
        <section className="pt-28 bg-black">
            <Swiper
                navigation={true}
                keyboard={{ enabled: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                modules={[Navigation, Autoplay, Keyboard]}
                className="relative"
            >
                <SwiperSlide>
                    <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 sm:py-12 md:py-24 lg:px-8 lg:py-16">
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                            <div className="order-2 md:order-none w-full md:w-[48%] lg:py-24">
                                <div className="font-cormorant md:text-lg lg:text-2xl text-white">
                                    Chase The New Flavour
                                </div>
                                <h2 className="font-cormorant text-4xl md:text-6xl lg:text-8xl font-bold text-[#DCCA87]">
                                    Love The Original Taste
                                </h2>
                                <p className="mt-5 lg:mt-10 text-sm lg:text-base text-[#AAA] leading-6">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                                    eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                                    quidem quam repellat.
                                </p>
                                <a
                                    href="/our-menu"
                                    className="mt-8 flex items-center gap-x-3 bg-[#DCCA87] px-12 py-3 font-cormorant text-lg font-medium w-fit transition focus:outline-none focus:ring"
                                >
                                    Explore Menu
                                    <MoveRightIcon className="w-5 h-5" />
                                </a>
                            </div>
                            <div className="flex-1">
                                <img
                                    alt="Hero image"
                                    src="/images/hero/hero-image-02.png"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 sm:py-12 md:py-24 lg:px-8 lg:py-16">
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                            <div className="order-2 md:order-none w-full md:w-[48%] lg:py-24">
                                <div className="font-cormorant md:text-lg lg:text-2xl text-white">
                                    Chase The New Flavour
                                </div>
                                <h2 className="font-cormorant text-4xl md:text-6xl lg:text-8xl font-bold text-[#DCCA87]">
                                    Love The Original Taste
                                </h2>
                                <p className="mt-5 lg:mt-10 text-sm lg:text-base text-[#AAA] leading-6">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                                    eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                                    quidem quam repellat.
                                </p>
                                <a
                                    href="/our-menu"
                                    className="mt-8 flex items-center gap-x-3 bg-[#DCCA87] px-12 py-3 font-cormorant text-lg font-medium w-fit transition focus:outline-none focus:ring"
                                >
                                    Explore Menu
                                    <MoveRightIcon className="w-5 h-5" />
                                </a>
                            </div>
                            <div className="flex-1">
                                <img
                                    alt="Hero image"
                                    src="/images/hero/hero-image-03.png"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20" />
                    </svg>
                    <span ref={progressContent} />
                </div>
            </Swiper>
        </section>
    )
}