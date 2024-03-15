import Image from "next/image";
import MainLayout from "../Components/Layout/MainLayout";
import HeroSection from "../Components/HeroSection";
import Link from "next/link";
import ServiceCard from "@/Components/UI/ServiceCard";
import { MacbookScroll } from "@/Components/UI/MacbookScroll";
import { ContainerScroll } from "@/Components/UI/ContainerScrollAnimation";

export default function Home() {
    return (
        <MainLayout>
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
                    <div className="bg-[#F0F0F0] xl:h-[22rem] w-full lg:rounded-r-[100px] grid lg:grid-cols-4 border-[#00000052]">
                        <div className="border-b lg:border-b-0 px-8 text-[#000] h-full border-r-[1px] flex border-[#00000052]">
                            <div className=" my-auto py-8 lg:py-0">
                                <h2 className="text-3xl font-semibold">
                                    Our <span className="text-lightblue tracking-wider">Services</span>
                                </h2>
                                <p>The things we are able to do and deliver</p>
                                <Link href="#" className="mt-4 inline-block font-medium text-lightblue">
                                    View more →
                                </Link>
                            </div>
                        </div>
                        <ServiceCard
                            title="Digital Development"
                            url="#"
                            text="Experience the power of Codiko with our full-spectrum digital development services, covering web, mobile, and software solutions. From captivating websites to cutting-edge mobile apps and robust software development, we bring your digital vision to life."
                        />
                        <ServiceCard
                            title="User-Centric Design and Strategy"
                            url="#"
                            text="Rely on us to enhance user experiences, boost SEO, and provide strategic consulting aligned with your business goals. From E-commerce solutions to seamless integration, we ensure impactful and SEO friendly digital solutions"
                        />
                        <ServiceCard
                            title="Sustained Performance and Support"
                            url="#"
                            text="Beyond development, we offers ongoing maintenance and support services. Rely on us to keep your digital assets running smoothly, optimizing performance, and ensuring the security of your applications."
                            style={{ borderBottomRightRadius: "100px" }}
                        />
                    </div>
                </div>
            </section>

            <section id="why-us" className="container relative">
                <div className="bg-[#222931] relative rounde-tl-md rounded-tr-md">
                    <h2 className="text-center font-extrabold text-3xl tracking-widest h-fit relative -top-[18px]">WHY US</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 max-w-4xl justify-center gap-4 md:justify-between mx-auto px-8 py-2 md:py-10  flex-wrap">
                        <div className="text-center tracking-wider">
                            <h2 className="text-4xl font-semibold pb-2 tracking-[0.5rem]">20</h2>
                            <p className="text-xs">PROJECTS COMPLETED</p>
                        </div>
                        <div className="text-center tracking-wider">
                            <h2 className="text-4xl font-semibold pb-2 tracking-[0.5rem]">15</h2>
                            <p className="text-xs">HAPPY CUSTOMERS</p>
                        </div>
                        <div className="text-center tracking-wider">
                            <h2 className="text-4xl font-semibold pb-2 tracking-[0.5rem]">30</h2>
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
                        <div className="h-[80%] w-full ml-auto mt-auto relative">
                            <Image src="/Group 2.png" fill className="object-contain object-right-bottom" alt="" />
                        </div>
                    </div>
                    <div className="md:px-8 pt-8 flex flex-col md:flex-row">
                        <div className="flex-1 relative aspect-video w-full md:aspect-auto ">
                            <Image src="/christina-wocintechchat-com-p0qKsW3uqA4-unsplash 1.png" className="object-cover object-center" fill alt="" />
                        </div>
                        <div className="flex-1 py-4 md:p-6 bg-primary md:-ml-20 relative z-[1] md:mt-[13rem]">
                            <h3 className="leading-10">Unleash Your Potential with Codiko </h3>
                            <p className="mt-4 tracking-wider leading-relaxed">
                                Codiko has earned the trust of a diverse clientele who rely on our expertise to bring their digital visions to life.
                                Our commitment to excellence and customer satisfaction has established Codiko as a trusted partner in the
                                ever-evolving world of web, mobile, and software development. Join the growing community of businesses that have
                                chosen Codiko for unparalleled digital solutions.
                            </p>
                            <Link href="#" className="btn btn-blue mt-6">
                                READ MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="" className="mt-20">
                <div className="-mt-80">
                    <MacbookScroll title="CODIKODEV" src="/linear.webp" />
                </div>
            </section>

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

            <section id="connect" className="mt-32">
                <div className="relative text-center w-full pb-20 container">
                    <Image src="/cover-image 1.png" fill className="-z-[1] object-contain object-right-bottom" alt="" />

                    <div className="h-24 bg-opacity-70 mb-8 w-[1px] mx-auto bg-lightblue"></div>

                    <div className="mx-auto w-fit">
                        <h2 className="tracking-wide mt-10">Have a project in mind?</h2>
                        <p className="mt-4 text-lg tracking-wider">Let{"'"}s disuss it</p>
                        <Link href="#" className="btn btn-trans-white font-normal mt-4">
                            Contact us
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
