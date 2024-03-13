import { Chef } from "@/types"
import { MinusIcon } from "lucide-react"

interface AboutProps {
    data: Chef
}

export const About = ({ data }: AboutProps) => {
    return (
        <div className="flex-1">
            <div>
                <div className="mb-5">
                    <div className="font-cormorant font-bold text-2xl text-[#DCCA87]">
                        {data.level}
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="125"
                            height="15"
                            viewBox="0 0 110 11"
                            fill="none"
                        >
                            <path
                                d="M1.5359 3.78868L4.5 2.07735L7.4641 3.78868V7.21133L4.5 8.92265L1.5359 7.21133V3.78868Z"
                                fill="#DCCA87"
                                stroke="#DCCA87"
                            />
                            <rect
                                x="2.5"
                                y="5.5"
                                width="24"
                                height="1"
                                fill="#DCCA87"
                            />
                            <path
                                d="M33.7369 3.03868L38 0.57735L42.2631 3.03868V7.96133L38 10.4226L33.7369 7.96133V3.03868Z"
                                stroke="#DCCA87"
                            />
                            <path
                                d="M48.7369 3.03868L53 0.57735L57.2631 3.03868V7.96133L53 10.4226L48.7369 7.96133V3.03868Z"
                                stroke="#DCCA87"
                            />
                            <path
                                d="M63.7369 3.03868L68 0.57735L72.2631 3.03868V7.96133L68 10.4226L63.7369 7.96133V3.03868Z"
                                stroke="#DCCA87"
                            />
                            <rect
                                x="79.5"
                                y="5"
                                width="24"
                                height="1"
                                fill="#DCCA87"
                            />
                            <path
                                d="M102.536 3.78868L105.5 2.07735L108.464 3.78868V7.21133L105.5 8.92265L102.536 7.21133V3.78868Z"
                                fill="#DCCA87"
                                stroke="#DCCA87"
                            />
                        </svg>
                    </div>
                </div>
                <h2 className="font-cormorant capitalize text-4xl font-bold">
                    {data.name}
                </h2>
                <p className="my-16 italic text-[#AAA]">
                    {data.description}
                </p>
                <ul className="flex flex-col gap-y-6">
                    {data.achievements.map(({ achievement }, index) => (
                        <li key={index} className="flex items-center gap-x-2 text-[#AAA]">
                            <MinusIcon className="text-[#DCCA87]" />
                            {achievement}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}