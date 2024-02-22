export const ChefWords = () => {
    return (
        <section className="py-16 xl:py-28 px-8 xl:px-0 bg-about-us">
            <div className="mx-auto max-w-screen-xl flex flex-col xl:flex-row items-center gap-x-20">
                <div className="mb-20 xl:mb-0 flex-1">
                    <picture>
                        <img
                            src="/images/chef-image.png"
                            alt="Chef Kevin Luo"
                            title="Chef Kevin Luo"
                        />
                    </picture>
                </div>
                <div className="flex-1">
                    <div>
                        <h2 className="font-cormorant text-2xl font-bold text-white">
                            Chef's word
                        </h2>
                        <h3 className="mb-6 font-cormorant text-6xl font-bold text-[#DCCA87]">
                            "What We Believe In
                        </h3>
                    </div>
                    <div>  
                        <p className="my-4 text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </p>
                        <p className="text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        </p>
                    </div>
                    <div className="my-8">
                        <h5 className="font-cormorant text-2xl font-bold text-[#DCCA87]">
                            Kevin Luo
                        </h5>
                        <h5 className="text-sm text-white">
                            Chef Founder
                        </h5>
                    </div>
                    <div>
                        <picture>
                            <img
                                src="/images/chef-signature-image.png"
                                alt="Signature Chef Kevin Luo"
                                title="Signature Chef Kevin Luo"
                                className="w-52"
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}