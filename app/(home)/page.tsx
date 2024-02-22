import { Navbar } from "@/components/common/navbar"
import { Hero } from "@/components/home/hero"
import { AboutUs } from "@/components/home/about-us"
import { FineCuisine } from "@/components/home/fine-cuisine"
import { Drink } from "@/components/home/drinks"
import { ChefWords } from "@/components/common/chef-words"
import { Video } from "@/components/common/video"
import { OurLaurels } from "@/components/common/our-laurels"
import { PhotoGallery } from "@/components/photo-gallery"

const Home = () => {
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
            <PhotoGallery />
        </main>
    )
}

export default Home