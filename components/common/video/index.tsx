"use client"
import { useRef, useState } from "react"
import { PauseIcon, PlayIcon } from "lucide-react"

export const Video = () => {
    const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handlePlayVideo = () => {
        videoRef.current && videoRef.current.play()
        setIsPlayingVideo(true)
    }

    const handlePauseVideo = () => {
        videoRef.current && videoRef.current.pause()
        setIsPlayingVideo(false)
    }

    const handleVideoAction = () => {
        if (isPlayingVideo) {
            handlePauseVideo()
        } else {
            handlePlayVideo()
        }
    }

    return (
        <section className="relative w-full">
            <div>
                <video
                    loop
                    ref={videoRef}
                    src="/video/dinner-video.mp4"
                />
            </div>
            <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black/70 z-10">
                <button
                    type="button"
                    className="group flex justify-center items-center w-24 h-24 outline-none rounded-full border border-[#DCCA87] hover:bg-[#DCCA87] hover:opacity-85 duration-300 transition-all duration-300"
                    onClick={handleVideoAction}
                >
                    {isPlayingVideo ? (
                        <PauseIcon className="w-6 h-6 text-white group-hover:text-black" />
                    ) : (
                        <PlayIcon className="w-6 h-6 text-white group-hover:text-black" />
                    )}
                </button>
            </div>
        </section>
    )
}