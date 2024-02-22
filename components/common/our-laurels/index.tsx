export const OurLaurels = () => {
    return (
        <section className="py-16 px-8 xl:px-0 xl:py-20 bg-about-us">
            <div className="mx-auto max-w-screen-xl flex flex-col xl:flex-row items-center gap-x-28">
                <div className="mb-20 xl:mb-0">
                    <div>
                        <h2 className="font-cormorant text-2xl font-bold text-white">
                            Awards & Recognition
                        </h2>
                        <h3 className="mb-10 font-cormorant text-6xl font-bold text-[#DCCA87]">
                            Our Laurels
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-center gap-x-4">
                            <div>
                                <img
                                    src="/images/laurels-awards-2.png"
                                    alt="Bib Gourmond"
                                    title="Bib Gourmond"
                                />
                            </div>
                            <div>
                                <h4 className="font-cormorant text-xl font-bold text-[#DCCA87]">
                                    Bib Gourmond
                                </h4>
                                <p className="text-sm text-white">
                                    Lorem Ipsum Dolor Sit Amet, Consectetur.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <div>
                                <img
                                    src="/images/laurels-awards-1.png"
                                    alt="Rising Star"
                                    title="Rising Star"
                                />
                            </div>
                            <div>
                                <h4 className="font-cormorant text-xl font-bold text-[#DCCA87]">
                                    Bib Gourmond
                                </h4>
                                <p className="text-sm text-white">
                                    Lorem Ipsum Dolor Sit Amet, Consectetur.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <div>
                                <img
                                    src="/images/laurels-awards-5.png"
                                    alt="AA Hospitality"
                                    title="AA Hospitality"
                                />
                            </div>
                            <div>
                                <h4 className="font-cormorant text-xl font-bold text-[#DCCA87]">
                                    Bib Gourmond
                                </h4>
                                <p className="text-sm text-white">
                                    Lorem Ipsum Dolor Sit Amet, Consectetur.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <div>
                                <img
                                    src="/images/laurels-awards-3.png"
                                    alt="Outstanding Chef"
                                    title="Outstanding Chef"
                                />
                            </div>
                            <div>
                                <h4 className="font-cormorant text-xl font-bold text-[#DCCA87]">
                                    Bib Gourmond
                                </h4>
                                <p className="text-sm text-white">
                                    Lorem Ipsum Dolor Sit Amet, Consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src="/images/lourels-image.png"
                        alt="Our Laurels"
                        title="Our Laurels"
                        className="mx-auto md:w-[90%] xl:w-full"
                    />
                </div>
            </div>
        </section>
    )
}