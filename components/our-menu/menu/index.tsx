"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { breakfasts, lunchs, dinners, vegetarians } from "@/utils/plates";

export const Menu = () => {
  return (
    <div className="py-24 mx-auto max-w-screen-xl">
        <div className="flex justify-center border-t border-b border-[#222] py-6">
            <Tabs defaultValue="breakfast" className="w-full justify-center">
                <TabsList className="flex justify-center items-center bg-black gap-x-2 md:gap-x-16">
                    <TabsTrigger value="breakfast" className="bg-black hover:bg-[#DCCA87] hover:text-black data-[state=active]:bg-[#DCCA87] data-[state=active]:animate-pulse rounded-none text-base font-bold">
                        Breakfast
                    </TabsTrigger>
                    <TabsTrigger value="lunch" className="bg-black hover:bg-[#DCCA87] hover:text-black data-[state=active]:bg-[#DCCA87] data-[state=active]:animate-pulse rounded-none text-base font-bold">
                        Lunch
                    </TabsTrigger>
                    <TabsTrigger value="dinner" className="bg-black hover:bg-[#DCCA87] hover:text-black data-[state=active]:bg-[#DCCA87] data-[state=active]:animate-pulse rounded-none text-base font-bold">
                        Dinner
                    </TabsTrigger>
                    <TabsTrigger value="vegetarian" className="bg-black hover:bg-[#DCCA87] hover:text-black data-[state=active]:bg-[#DCCA87] data-[state=active]:animate-pulse rounded-none text-base font-bold">
                        Vegetarian
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="breakfast" className="w-full">
                    <ul className="my-10">
                        {breakfasts.map((breakfast, index) => (
                            <li key={index} className="flex justify-center items-center md:gap-x-12 xl:gap-x-32">
                                <div>
                                    <img
                                        src={breakfast.imageSrc}
                                        alt={breakfast.name}
                                        title={breakfast.name}
                                        className="w-80"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-cormorant text-2xl font-bold">
                                        {breakfast.name}
                                    </h3>
                                    <p className="text-sm text-[#AAA]">
                                        {breakfast.description}
                                    </p>
                                    <div className="mt-5 flex items-center gap-x-4 md:gap-x-8">
                                        <div className="w-12 md:w-28 h-[1px] bg-[#DCCA87]" />
                                        <div className="flex items-center gap-x-2">
                                            <span className="font-cormorant text-xl md:text-2xl font-bold text-[#DCCA87]">
                                                {breakfast.priceBy}
                                            </span>
                                            <span className="relative font-cormorant text-xl md:text-2xl font-bold text-[#DCCA87] opacity-20">
                                                {breakfast.priceOf}
                                                <div className="absolute top-[60%] left-0 translate-y-[-60%] w-[120%] h-[2px] bg-[#DCCA87]" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </TabsContent>
                <TabsContent value="lunch">
                    <ul className="my-10">
                        {lunchs.map((lunch, index) => (
                            <li key={index} className="flex justify-center items-center md:gap-x-12 xl:gap-x-32">
                                <div>
                                    <img
                                        src={lunch.imageSrc}
                                        alt={lunch.name}
                                        title={lunch.name}
                                        className="w-80"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-cormorant text-2xl font-bold">
                                        {lunch.name}
                                    </h3>
                                    <p className="text-sm text-[#AAA]">
                                        {lunch.description}
                                    </p>
                                    <div className="mt-5 flex items-center gap-x-4 md:gap-x-8">
                                        <div className="w-12 md:w-28 h-[1px] bg-[#DCCA87]" />
                                        <div className="flex items-center gap-x-2">
                                            <span className="font-cormorant text-xl md:text-2xl font-bold text-[#DCCA87]">
                                                {lunch.priceBy}
                                            </span>
                                            <span className="relative font-cormorant text-xl md:text-2xl font-bold text-[#DCCA87] opacity-20">
                                                {lunch.priceOf}
                                                <div className="absolute top-[60%] left-0 translate-y-[-60%] w-[120%] h-[2px] bg-[#DCCA87]" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </TabsContent>
                <TabsContent value="dinner">
                    <ul className="my-10">
                        {dinners.map((dinner, index) => (
                            <li key={index} className="flex justify-center items-center md:gap-x-12 xl:gap-x-32">
                                <div>
                                    <img
                                        src={dinner.imageSrc}
                                        alt={dinner.name}
                                        title={dinner.name}
                                        className="w-80"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-cormorant text-2xl font-bold">
                                        {dinner.name}
                                    </h3>
                                    <p className="text-sm text-[#AAA]">
                                        {dinner.description}
                                    </p>
                                    <div className="mt-5 flex items-center gap-x-4 md:gap-x-8">
                                        <div className="w-12 md:w-28 h-[1px] bg-[#DCCA87]" />
                                        <div className="flex items-center gap-x-2">
                                            <span className="font-cormorant text-xl md:text-2xl font-bold text-[#DCCA87]">
                                                {dinner.priceBy}
                                            </span>
                                            <span className="relative font-cormorant text-xl md:text-2xl font-bold text-[#DCCA87] opacity-20">
                                                {dinner.priceOf}
                                                <div className="absolute top-[60%] left-0 translate-y-[-60%] w-[120%] h-[2px] bg-[#DCCA87]" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </TabsContent>
                <TabsContent value="vegetarian">
                    <ul className="my-10">
                        {vegetarians.map((vegetarian, index) => (
                            <li key={index} className="flex justify-center items-center gap-x-4 md:gap-x-12 xl:gap-x-32">
                                <div>
                                    <img
                                        src={vegetarian.imageSrc}
                                        alt={vegetarian.name}
                                        title={vegetarian.name}
                                        className="w-80"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-cormorant text-2xl font-bold">
                                        {vegetarian.name}
                                    </h3>
                                    <p className="text-sm text-[#AAA]">
                                        {vegetarian.description}
                                    </p>
                                    <div className="mt-5 flex items-center gap-x-4 md:gap-x-8">
                                        <div className="w-12 md:w-28 h-[1px] bg-[#DCCA87]" />
                                        <div className="flex items-center gap-x-2">
                                            <span className="font-cormorant text-xl md:text-2xl font-bold text-[#DCCA87]">
                                                {vegetarian.priceBy}
                                            </span>
                                            <span className="relative font-cormorant text-xl md:text-2xl font-bold text-[#DCCA87] opacity-20">
                                                {vegetarian.priceOf}
                                                <div className="absolute top-[60%] left-0 translate-y-[-60%] w-[120%] h-[2px] bg-[#DCCA87]" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </TabsContent>
            </Tabs>
        </div>
    </div>
  );
};
