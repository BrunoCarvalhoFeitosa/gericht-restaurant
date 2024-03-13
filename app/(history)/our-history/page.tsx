import { Navbar } from "@/components/common/navbar"
import { Breadcumb } from "@/components/our-chefs/breadcrumb"
import { Timeline } from "@/components/our-history/timeline"
import { ChefWords } from "@/components/common/chef-words"
import { Video } from "@/components/common/video"
import { OurLaurels } from "@/components/common/our-laurels"
import { Results } from "@/components/common/results"
import { ScrollTop } from "@/components/common/scroll-top"

const OurHistoryPage = () => {
    return (
        <main>
            <Navbar />
            <Breadcumb title="Our History" pathname="/our-history" />
            <Timeline />
            <ChefWords />
            <Video />
            <OurLaurels />
            <Results />
            <ScrollTop />
        </main>
    )
}

export default OurHistoryPage