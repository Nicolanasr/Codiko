import Image from "next/image";
import MainLayout from "../Components/Layout/MainLayout";
import HeroSection from "../Components/HeroSection";
import Link from "next/link";
import ServiceCard from "@/Components/UI/ServiceCard";

export default function Home() {
    return (
        <MainLayout>
            <HeroSection />

            <section id="about" className="my-12">
                <div className="container flex flex-col lg:flex-row gap-8 lg:gap-24 items-center">
                    <div className="flex-1">
                        <Image src="/about img(1).png" height={425} width={640} alt="about-us" />
                    </div >
                    <div className="flex-1">
                        <p className="tracking-wider md:leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <Link href="#" className="btn btn-blue mt-6">Learn More</Link>
                    </div>
                </div>
            </section>

            <section id="services" className="my-40">
                <div className="div mr-28 text-[#000] tracking-wide">
                    <div className="bg-[#F0F0F0] h-80 w-full rounded-r-[100px] grid grid-cols-4 border-[#00000052]">
                        <div className="px-8 text-[#000] h-full border-r-[1px] flex border-[#00000052]">
                            <div className=" my-auto">
                                <h2 className="text-3xl font-semibold">
                                    Our <span className="text-lightblue tracking-wider">Services</span>
                                </h2>
                                <p>The things we are able to do and deliver</p>
                            </div>
                        </div>
                        <ServiceCard
                            title="DIGITAL PRODUCTS"
                            text="Digital Branding Web & Mobile Sites User Interface Design Responsive Techs"
                            button={{ text: "Learn More", url: "#" }}
                        />
                        <ServiceCard
                            title="SEO & CONTENT WRITING"
                            text="Digital Strategy User Experience Design User Interface Design Mobile SitesDigital Strategy User Experience"
                            button={{ text: "Learn More", url: "#" }}
                        />
                        <ServiceCard
                            title="DIGITAL MARKETING"
                            text="Custom Platform Back-End Executions Interface Apps Mobile Systems"
                            button={{ text: "Learn More", url: "#" }}
                        />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
