export const FineCuisine = () => {
    return (
        <section className="mx-auto py-12 xl:py-28 max-w-screen-xl bg-black overflow-hidden">
            <div className="text-center">
                <h2 className="font-cormorant text-2xl font-bold text-white">
                    Fine Cuisine
                </h2>
                <h3 className="font-cormorant text-6xl font-bold text-[#DCCA87]">
                    Experience The Fine Cuisine
                </h3>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3">
                <div className="animate-spin-slow">
                    <img
                        src="/images/fine-cuisine-image-01.png"
                        alt="Tacos"
                        title="Tacos"
                        className="scale-90 hover:scale-105 transition-all duration-500 cursor-zoom-in"
                    />
                </div>
                <div className="animate-spin-slow">
                    <img
                        src="/images/fine-cuisine-image-02.png"
                        alt="Vegan Soup"
                        title="Vegan Soup"
                        className="scale-90 hover:scale-105 transition-all duration-500 cursor-zoom-in"
                    />
                </div>
                <div className="animate-spin-slow">
                    <img
                        src="/images/fine-cuisine-image-01.png"
                        alt="Tacos"
                        title="Tacos"
                        className="scale-90 hover:scale-105 transition-all duration-500 cursor-zoom-in"
                    />
                </div>
            </div>
        </section>
    )
}