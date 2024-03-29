import Link from "next/link";
import React from "react";
import CardWithNumber from "./UI/CardWithNumber";
import Image from "next/image";
import HeroPuzzle from "./UI/HeroPuzzle";

type Props = {};

const HeroSection = (props: Props) => {
    return (
        <>
            <div className="md:min-h-fit w-full bg-primary relative z-10">
                <Image
                    src="/background.png"
                    alt="her-background"
                    fill
                    className="object-cover md:object-contain absolute top-0 bottom-0 left-0 right-0 -z-10 opacity-40"
                />
                <div className="container h-full flex-1 pt-40 md:pb-24 min-h-[inherit] ">
                    <div className="flex h-full min-h-[inherit]  justify-between">
                        <div className="my-auto flex-1 max-w-[45rem]">
                            <span className="tracking-[0.2rem] uppercase">Crafting Future-Ready Solutions</span>
                            <div className="flex">
                                <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest leading-tight">
                                    Unlock Your Digital Potential
                                </h1>
                                <span className="relative h-24 w-8 mt-4">
                                    <Image src="/aquarius 1.png" fill className="object-contain" alt="aquarius" />
                                </span>
                            </div>
                            <p className="mt-6 tracking-wider leading-loose">
                                Precision in Code, Mastery in Software development. Transforming Visions into Seamless Reality – Elevate your
                                brand, captivate your audience, and thrive in the digital landscape.
                            </p>
                            <div className="flex flex-col sm:flex-row mt-4 gap-8 items-center">
                                <Link href="#contact-us" className="btn btn-blue ">
                                    Let{"'"}s Talk About Your Project
                                </Link>

                                <Link href="#" className="group projects">
                                    See Our Projects <span className="inline-block transition-all group-hover:translate-x-2">→</span>
                                </Link>
                            </div>
                            <div className="mt-8 grid lg:grid-cols-4 gap-1 sm:gap-2">
                                <CardWithNumber defaultHover text="Stunning Designs" />
                                <CardWithNumber text="Responsive Development" />
                                <CardWithNumber text="User-Friendly Interfaces" />
                                <CardWithNumber text={`SEO
Optimization`} />
                            </div>
                            <div className="ml-auto w-fit">
                                <Image src="/abstract-shape 1.png" height={50} width={50} className="object-contain opacity-90" alt="" />
                            </div>
                        </div>
                        <div className="flex-1 hidden md:flex m-auto h-96 pb-12">
                            <div className="relative h-full max-h-96 my-auto block ml-auto flex-1">
                                {/* <Image src="/heroPuzzle.png" fill alt="hero-puzzle" className="object-contain" /> */}
                                <HeroPuzzle />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
