import Image from "next/image";
import MainLayout from "../Components/Layout/MainLayout";
import HeroSection from "../Components/HeroSection";
import Link from "next/link";
import ServiceCard from "@/Components/UI/ServiceCard";

import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Home() {
    return (
        <MainLayout>
            <HeroSection />

            <section id="about" className="my-12">
                <div className="container flex flex-col lg:flex-row gap-8 lg:gap-24 items-center">
                    <div className="flex-1">
                        <h2>
                            <Image src="/about img(1).png" height={425} width={640} alt="about-us" />
                        </h2>
                    </div>
                    <div className="flex-1">
                        <p className="tracking-wider md:leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <Link href="#" className="btn btn-blue mt-6">
                            Learn More
                        </Link>
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
                            style={{ borderBottomRightRadius: "100px" }}
                        />
                    </div>
                </div>
            </section>

            <section id="why-us" className="container relative">
                <div className="bg-[#222931] relative rounde-tl-md rounded-tr-md">
                    <h2 className="text-center font-extrabold text-3xl tracking-widest h-fit relative -top-[18px]">WHY US</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 max-w-4xl justify-center gap-4 md:justify-between mx-auto px-8 py-10  flex-wrap">
                        <div className="text-center tracking-wider">
                            <h2 className="text-4xl font-semibold pb-2 tracking-[0.5rem]">15</h2>
                            <p className="text-xs">PROJECTS COMPLETED</p>
                        </div>
                        <div className="text-center tracking-wider">
                            <h2 className="text-4xl font-semibold pb-2 tracking-[0.5rem]">5</h2>
                            <p className="text-xs">HAPPY CUSTOMERS</p>
                        </div>
                        <div className="text-center tracking-wider">
                            <h2 className="text-4xl font-semibold pb-2 tracking-[0.5rem]">50</h2>
                            <p className="text-xs">CONSULTATIONS</p>
                        </div>
                        <div className="text-center tracking-wider">
                            <h2 className="text-4xl font-semibold pb-2 tracking-[0.5rem]">3</h2>
                            <p className="text-xs">ACTIVE CLIENTS</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute top-0 left-0 right-0 -z-10 h-60 bg-[#222931] rounde-bl-md rounded-br-md flex">
                        <div className="h-40 w-full ml-auto mt-auto relative">
                            <Image src="/Group 2.png" fill className="object-contain object-right-bottom" alt="" />
                        </div>
                    </div>
                    <div className="md:px-8 pt-8 flex flex-col md:flex-row">
                        <div className="flex-1 relative aspect-square w-full md:aspect-auto ">
                            <Image src="/christina-wocintechchat-com-p0qKsW3uqA4-unsplash 1.png" className="object-cover object-center" fill alt="" />
                        </div>
                        <div className="flex-1 py-4 md:p-6 bg-primary md:-ml-20 relative z-[1] md:mt-[13rem]">
                            <h3 className="leading-10">We are trusted by more than 100 customer</h3>
                            <p className="mt-4 tracking-wider leading-relaxed">
                                Voluptatum ipsa quasi voluptatibus eos qui eum consequatur blanditiis. Sunt perspiciatis necessitatibus qui. Explicabo
                                quia omnis soluta et. Quis adipisci distinctio cumque. Nihil tempora quia iste optio reprehenderit excepturi rerum
                                voluptatem.
                            </p>
                            <Link href="#" className="btn btn-blue mt-6">
                                READ MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="connect" className="mt-32">
                <div className="relative text-center w-full pb-20">
                    <Image src="/cover-image 1.png" fill className="-z-[1] object-contain object-right-bottom" alt="" />

                    <div className="h-24 bg-opacity-70 mb-8 w-[1px] mx-auto bg-lightblue"></div>

                    <div className="flex gap-6 w-fit m-auto">
                        <Link href="#" className="group rounded-full p-2 w-10 h-10 border border-lightblue hover:bg-lightblue transition-all" >
                            <FaInstagram className=" m-auto w-full opacity-70 h-full group-hover:opacity-100 transition-all" />
                        </Link>
                        <Link href="#" className="group rounded-full p-2 w-10 h-10 border border-lightblue hover:bg-lightblue transition-all" >
                            <FaWhatsapp className=" m-auto w-full opacity-70 h-full group-hover:opacity-100 transition-all" />
                        </Link>
                        <Link href="#" className="group rounded-full p-2 w-10 h-10 border border-lightblue hover:bg-lightblue transition-all" >
                            <FaFacebook className=" m-auto w-full opacity-70 h-full group-hover:opacity-100 transition-all" />
                        </Link>
                        <Link href="#" className="group rounded-full p-2 w-10 h-10 border border-lightblue hover:bg-lightblue transition-all" >
                            <FaLinkedin className=" m-auto w-full opacity-70 h-full group-hover:opacity-100 transition-all" />
                        </Link>
                    </div>

                    <div className="mx-auto w-fit">
                        <h2 className="tracking-wide mt-10">Have a project in mind?</h2>
                        <p className="mt-4 text-lg tracking-wider">Let{"'"}s disuss it</p>
                        <Link href="#" className="btn btn-trans-white font-normal mt-4">Contact us</Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
