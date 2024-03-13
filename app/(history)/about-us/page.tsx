import { Navbar } from "@/components/common/navbar"
import { Breadcumb } from "@/components/our-chefs/breadcrumb"
import { ChefWords } from "@/components/common/chef-words"
import { Video } from "@/components/common/video"
import { OurLaurels } from "@/components/common/our-laurels"
import { Results } from "@/components/common/results"
import { ScrollTop } from "@/components/common/scroll-top"

const AboutUsPage = () => {
    return (
        <main>
            <Navbar />
            <Breadcumb title="About Us" pathname="/about-us" />
            <ChefWords />
            <Video />
            <OurLaurels />
            <Results />
            <ScrollTop />
        </main>
    )
}

export default AboutUsPage