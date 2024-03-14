import { Navbar } from "@/components/common/navbar"
import { Breadcumb } from "@/components/our-chefs/breadcrumb"
import { Map } from "@/components/location/map"
import { ChefWords } from "@/components/common/chef-words"
import { Video } from "@/components/common/video"
import { OurLaurels } from "@/components/common/our-laurels"
import { Results } from "@/components/common/results"
import { ScrollTop } from "@/components/common/scroll-top"

const LocationPage = () => {
    return (
        <main className="text-white">
            <Navbar />
            <Breadcumb title="Our location" pathname="/location" />
            {/* <Map /> */}
            <ChefWords />
            <Video />
            <OurLaurels />
            <Results />
            <ScrollTop />
        </main>
    )
}

export default LocationPage