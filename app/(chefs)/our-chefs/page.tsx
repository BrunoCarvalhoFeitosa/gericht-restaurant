import { Navbar } from "@/components/common/navbar"
import { Breadcumb } from "@/components/our-chefs/breadcrumb"
import { Chefs } from "@/components/our-chefs/chefs"
import { ChefWords } from "@/components/common/chef-words"
import { Video } from "@/components/common/video"
import { OurLaurels } from "@/components/common/our-laurels"
import { Results } from "@/components/common/results"
import { ScrollTop } from "@/components/common/scroll-top"

const OurChefsPage = () => {
    return (
        <main className="text-white">
            <Navbar />
            <Breadcumb title="Our Chefs" pathname="/our-chefs" />
            <Chefs />
            <ChefWords />
            <Video />
            <OurLaurels />
            <Results />
            <ScrollTop />
        </main>
    )
}

export default OurChefsPage