"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Chef } from "@/types/index"
import { chefs } from "@/utils/chefs"
import { Navbar } from "@/components/common/navbar"
import { Breadcumb } from "@/components/our-chefs/breadcrumb"
import { Picture } from "@/components/chef/picture"
import { About } from "@/components/chef/about"
import { ChefWords } from "@/components/common/chef-words"
import { Video } from "@/components/common/video"
import { OurLaurels } from "@/components/common/our-laurels"
import { Results } from "@/components/common/results"
import { ScrollTop } from "@/components/common/scroll-top"

const ChefPage = () => {
    const [data, setData] = useState<Chef | null>(null)
    const pathname = usePathname()
    const chefName = pathname.split("/").pop()

    useEffect(() => {
        const chef = chefs.filter((chef) => chef?.name == chefName)

        if (chef) {
            return setData(chef[0])
        }
    }, [pathname, chefName, setData])

    return (
        <main className="text-white">
            <Navbar />
            <Breadcumb title={chefName!} pathname={chefName!} />
            {data && (
                <div className="py-24 mx-auto max-w-screen-xl flex items-center gap-x-8">
                    <Picture data={data} />
                    <About data={data} />
                </div>
            )}
            <ChefWords />
            <Video />
            <OurLaurels />
            <Results />
            <ScrollTop />
        </main>
    )
}

export default ChefPage