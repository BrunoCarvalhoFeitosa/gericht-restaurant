import { Navbar } from "@/components/common/navbar"
import { Breadcumb } from "@/components/our-chefs/breadcrumb"
import { BookATableForm } from "@/components/book-a-table/form"
import { ChefWords } from "@/components/common/chef-words"
import { Video } from "@/components/common/video"
import { OurLaurels } from "@/components/common/our-laurels"
import { Results } from "@/components/common/results"
import { ScrollTop } from "@/components/common/scroll-top"

const BookATablePage = () => {
    return (
        <main>
            <Navbar />
            <Breadcumb title="Book a table" pathname="/book-a-table" />
            <BookATableForm />
            <ChefWords />
            <Video />
            <OurLaurels />
            <Results />
            <ScrollTop />
        </main>
    )
}

export default BookATablePage