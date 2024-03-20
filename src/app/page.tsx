import Image from "next/image";
import MainLayout from "../Components/Layout/MainLayout";
import HeroSection from "../Components/HeroSection";
import Link from "next/link";
import ServiceCard from "@/Components/UI/ServiceCard";
import { MacbookScroll } from "@/Components/UI/MacbookScroll";
import { ContainerScroll } from "@/Components/UI/ContainerScrollAnimation";
import { HeroParallax } from "@/Components/UI/HeroParallax";
import ContactUs from "@/Components/ContactUs";

export default function Home() {
    return (
        <>
            {/* <HeroParallax
                products={[
                    { thumbnail: "/about img(1).png", title: "", link: "" },
                    { thumbnail: "/about img(1).png", title: "", link: "" },
                    { thumbnail: "/about img(1).png", title: "", link: "" },
                    { thumbnail: "/about img(1).png", title: "", link: "" },
                    { thumbnail: "/about img(1).png", title: "", link: "" },
                    { thumbnail: "/about img(1).png", title: "", link: "" },
                    { thumbnail: "/about img(1).png", title: "", link: "" },
                    { thumbnail: "/about img(1).png", title: "", link: "" },
                    { thumbnail: "/about img(1).png", title: "", link: "" },
                    { thumbnail: "/about img(1).png", title: "", link: "" },
                    { thumbnail: "/about img(1).png", title: "", link: "" },
                    { thumbnail: "/about img(1).png", title: "", link: "" },
                ]}
            /> */}

            <HeroSection />

            <section id="about-us" className="my-12">
                <div className="container flex flex-col lg:flex-row gap-8 lg:gap-24 items-center">
                    <div className="flex-1">
                        <h2>
                            <Image src="/about img(1).png" height={425} width={640} alt="about-us" />
                        </h2>
                    </div>
                    <div className="flex-1">
                        <p className="tracking-wider md:leading-8">
                            Codiko is your gateway to innovative and transformative digital solutions.We are committed to reshaping the way businesses
                            thrive in the digital realm. At Codiko, we{"'"}re not just creators; we{"'"}re architects of your digital success. Whether
                            it{"'"}s crafting responsive websites, cutting-edge mobile apps, or robust software, we bring your ideas to life with
                            precision and creativity. Trust us to be your partner in the journey of digital evolution.{" "}
                        </p>
                        <Link href="#" className="btn btn-blue mt-6">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            <section id="services" className="my-40">
                <div className="div lg:mr-10 xl:mr-28 text-[#000] tracking-wide">
                    <div className="bg-[#F0F0F0] xl:h-[22rem] w-full lg:rounded-r-[100px] grid lg:grid-cols-5 border-[#00000052]">
                        <div className="border-b lg:border-b-0 px-8 text-[#000] h-full border-r-[1px] flex border-[#00000052]">
                            <div className=" my-auto py-8 lg:py-0">
                                <h2 className="text-3xl font-semibold">
                                    Our <span className="text-lightblue tracking-wider">Services</span>
                                </h2>
                                <p>The things we are able to do and deliver</p>
                                <Link href="/services" className="mt-4 inline-block font-medium text-lightblue">
                                    View more →
                                </Link>
                            </div>
                        </div>
                        <ServiceCard
                            title="Mobile & Web Design and Development"
                            url="#"
                            text={`We create awesome mobile apps and websites that look great and work like a charm! Whether you're on your phone or computer, we've got you covered with designs that pop and features that make life easier.`}
                        />
                        <ServiceCard
                            title="Optimization and SEO"
                            url="#"
                            text={`We're on a mission to get your website noticed by Google using some SEO magic. And to top it off, we'll make sure it loads faster than you can say "instant gratification" so your visitors have a smooth and speedy experience.`}
                        />
                        <ServiceCard
                            title="Hosting and Maintenance"
                            url="#"
                            text={`We handle all the technical stuff, from setting up reliable hosting services to ensuring everything runs smoothly and securely. With regular updates, backups, and monitoring, we handle your online presence, so you can focus on what you do best: running your business.`}
                        />
                        <ServiceCard
                            title="Custom Software Development"
                            url="#"
                            text="We craft personalized solutions designed exclusively for your business. From concept to completion, we work closely with you to understand your needs and create software that streamlines your operations, boosts efficiency, and helps you achieve your goals."
                            style={{ borderBottomRightRadius: "100px" }}
                        />
                    </div>
                </div>
            </section>

            <section id="why-us" className="container relative">
                <div className="bg-[#222931] relative rounde-tl-md rounded-tr-md">
                    <h2 className="text-center font-extrabold text-3xl tracking-widest h-fit relative -top-[18px]">WHY US</h2>
                    <ul className="tracking-wider text-left justify-center gap-4 md:justify-between mx-auto px-10 py-2 md:py-10  flex-wrap">
                        <li className="">
                            Does your website look like it{"'"}s stuck in the early 2000s?
                            {/* <h2 className="text-4xl font-semibold pb-2 tracking-[0.5rem]">20</h2>
                            <p className="text-xs">PROJECTS COMPLETED</p> */}
                        </li>
                        <li className="">
                            Are you struggling to attract organic traffic and generate leads online?
                            {/* <h2 className="text-4xl font-semibold pb-2 tracking-[0.5rem]">15</h2>
                            <p className="text-xs">HAPPY CUSTOMERS</p> */}
                        </li>
                        <li className="">
                            Are you losing potential customers because your website isn{"'"}t optimized for mobile devices?{" "}
                            {/* <h2 className="text-4xl font-semibold pb-2 tracking-[0.5rem]">3</h2>
                            <p className="text-xs">ACTIVE CLIENTS</p> */}
                        </li>
                        <li className="">
                            Is your website slow to load?{" "}
                            {/* <h2 className="text-4xl font-semibold pb-2 tracking-[0.5rem]">30</h2>
                            <p className="text-xs">CONSULTATIONS</p> */}
                        </li>
                    </ul>
                </div>
                <div className="relative">
                    <div className="absolute top-0 left-0 right-0 -z-10 h-60 bg-[#222931] rounde-bl-md rounded-br-md flex">
                        <div className="h-[80%] w-full ml-auto mt-auto relative">
                            <Image src="/Group 2.png" fill className="object-contain object-right-bottom" alt="" />
                        </div>
                    </div>
                    <div className="md:px-8 pt-8 flex flex-col md:flex-row">
                        <div className="flex-1 relative aspect-video w-full md:aspect-auto ">
                            {/* <Image src="/christina-wocintechchat-com-p0qKsW3uqA4-unsplash 1.png" className="object-cover object-center" fill alt="" /> */}
                            <video muted controls src="/yt5s.io-Web Design Agency video background-(480p).mp4" className="h-full w-full object-cover" />
                        </div>
                        <div className="flex-1 py-4 md:p-6 bg-primary md:-ml-20 relative z-[1] md:mt-[10rem]">
                            <h3 className="leading-10">We have the solution for you!</h3>
                            <p className="mt-4 tracking-wider leading-relaxed">
                                If your website is losing potential customers due to outdated designs or lack of mobile compatibility, our web agency
                                specializes in transforming online presences into modern, responsive platforms. With our expertise, we ensure your
                                website captivates visitors on any device, driving engagement and maximizing conversions in today{"'"}s digital
                                landscape.
                            </p>
                            <Link href="#" className="btn btn-blue mt-6">
                                READ MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </section >

            <section id="projects" className="mt-20">
                <div className="container">
                    <ContainerScroll
                        titleComponent={<h2 className="text-center font-extrabold text-3xl tracking-widest">OUR PROJECTS</h2>}
                        users={[
                            { name: "1", designation: "#1", image: "/background.png" },
                            { name: "1", designation: "", image: "/about img(1).png" },
                            { name: "1", designation: "", image: "/background.png" },
                            { name: "1", designation: "", image: "/background.png" },
                            { name: "1", designation: "", image: "/about img(1).png" },
                            { name: "1", designation: "", image: "/background.png" },
                            { name: "1", designation: "", image: "/about img(1).png" },
                            { name: "1", designation: "", image: "/background.png" },
                            { name: "1", designation: "", image: "/about img(1).png" },
                            { name: "1", designation: "", image: "/about img(1).png" },
                            { name: "1", designation: "", image: "/about img(1).png" },
                            { name: "1", designation: "", image: "/about img(1).png" },
                        ]}
                    />
                </div>
            </section>

            <section id="contact-us" className="mt-32">
                <div className="relative text-center w-full pb-20 container">
                    <Image src="/cover-image 1.png" fill className="-z-[1] object-contain object-right-bottom" alt="" />

                    <div className="h-24 bg-opacity-70 mb-8 w-[1px] mx-auto bg-lightblue"></div>

                    <div className="mx-auto w-fit">
                        <h2 className="tracking-wide mt-10">Have a project in mind?</h2>
                        <p className="mt-4 text-lg tracking-wider">Let{"'"}s disuss it</p>
                    </div>
                    <ContactUs />
                </div>
            </section>
        </>
    );
}
