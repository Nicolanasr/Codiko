import Link from "next/link";
import React from "react";
import CardWithNumber from "./UI/CardWithNumber";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
    return (
        <>
            <div className="md:min-h-fit w-full bg-primary relative z-10">
                <Image src="/background.png" alt="her-background" fill className="object-cover md:object-contain absolute top-0 bottom-0 left-0 right-0 -z-10 opacity-40" />
                <div className="container h-full flex-1 py-32 min-h-[inherit] ">
                    <div className="flex h-full min-h-[inherit]  justify-between">
                        <div className="my-auto flex-1 max-w-[32rem]">
                            <h3>A TRUSTED DIGITAL AGENCY</h3>
                            <div className="flex">
                                <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest leading-tight">We make your business look amazing</h1>
                                <span className="relative h-24 w-8 mt-4">
                                    <Image src="/aquarius 1.png" fill className="object-contain" alt="aquarius" />
                                </span>
                            </div>
                            <p className="mt-6 tracking-wider">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam.
                            </p>
                            <div className="flex mt-4 gap-8 items-center">
                                <Link href="#" className="btn btn-blue " >
                                    Get Started
                                </Link>

                                <Link href="#" className="group projects" >
                                    See Our Projects <span className="inline-block transition-all group-hover:translate-x-2">→</span>
                                </Link>
                            </div>
                            <div className="mt-6 flex gap-1 sm:gap-8">
                                <CardWithNumber defaultHover number={100} additional="+" text="CLIENT" />
                                <CardWithNumber number={30} text="STARTUP" />
                                <CardWithNumber number={40} text="PRODUCTS" />
                            </div>
                            <div className="ml-auto w-fit">
                                <Image src="/abstract-shape 1.png" height={50} width={50} className="object-contain opacity-90" alt="" />
                            </div>
                        </div>
                        <div className="flex-1 hidden md:flex m-auto h-72">
                            <div className="relative h-full max-h-96 my-auto block ml-auto flex-1">
                                <Image src="/heroPuzzle.png" fill alt="hero-puzzle" className="object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
