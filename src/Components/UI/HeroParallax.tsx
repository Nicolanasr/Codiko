"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CardWithNumber from "./CardWithNumber";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 100]), springConfig);
    return (
        <div
            ref={ref}
            className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard product={product} translate={translateXReverse} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="container relative z-10">
            <div className="my-auto flex-1 max-w-[32rem]">
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
                    Unleash the power of your online presence with Codiko – where innovation meets seamless functionality. Elevate your
                    brand, captivate your audience, and thrive in the digital landscape.
                </p>
                <div className="flex mt-4 gap-8 items-center">
                    <Link href="#" className="btn btn-blue ">
                        Get Started
                    </Link>

                    <Link href="#" className="group projects">
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

        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0"
        >
            <Link href={product.link} className="block group-hover/product:shadow-2xl ">
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </Link>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">{product.title}</h2>
        </motion.div>
    );
};
