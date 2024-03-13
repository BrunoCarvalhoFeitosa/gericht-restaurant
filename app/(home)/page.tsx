import { Navbar } from "@/components/common/navbar"
import { Hero } from "@/components/home/hero"
import { AboutUs } from "@/components/home/about-us"
import { FineCuisine } from "@/components/home/fine-cuisine"
import { Drink } from "@/components/home/drinks"
import { ChefWords } from "@/components/common/chef-words"
import { Video } from "@/components/common/video"
import { OurLaurels } from "@/components/common/our-laurels"
import { Results } from "@/components/common/results"
import { ScrollTop } from "@/components/common/scroll-top"

const HomePage = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <AboutUs />
            <FineCuisine />
            <Drink />
            <ChefWords />
            <Video />
            <OurLaurels />
            <Results />
            <ScrollTop />
        </main>
    )
}

export default HomePage