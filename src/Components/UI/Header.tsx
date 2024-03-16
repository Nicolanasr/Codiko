import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="absolute left-0 right-0 top-0 z-20 md:h-16 py-3">
            <div className="container relative h-full w-full flex flex-col md:flex-row gap-4 items-center">
                <Link href="/" className="inline-block min-h-8 h-full w-[135px] relative">
                    <Image src="/codiko-logo.png" fill alt="codiko logo" className="object-contain" />
                </Link>

                <nav className="mx-16 flex-1 hidden md:block">
                    <ul className="flex justify-between max-w-lg w-full lg:gap-8 items-center ">
                        <li className="">
                            <Link href="/about-us" className="group text-gray-300 hover:text-white relative transition-all px-4 py-2">
                                About Us
                                <span className="h-[2px] absolute bottom-0 left-0 right-unset w-0 group-hover:w-full transition-all bg-lightblue"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#why-us" className="group text-gray-300 hover:text-white relative transition-all px-4 py-2">
                                Why Us
                                <span className="h-[2px] absolute bottom-0 left-0 right-unset w-0 group-hover:w-full transition-all bg-lightblue"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="group text-gray-300 hover:text-white relative transition-all px-4 py-2">
                                Services
                                <span className="h-[2px] absolute bottom-0 left-0 right-unset w-0 group-hover:w-full transition-all bg-lightblue"></span>
                            </Link>

                        </li>
                        <li>
                            <Link href="/portfolio" className="group text-gray-300 hover:text-white relative transition-all px-4 py-2">
                                Projects
                                <span className="h-[2px] absolute bottom-0 left-0 right-unset w-0 group-hover:w-full transition-all bg-lightblue"></span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Link href="#contact" className="whitespace-nowrap hidden md:block md:ml-auto btn btn-trans-white lg:px-8 text-sm font-normal tracking-wide">
                    CONTACT US
                </Link>
            </div>
        </header>
    );
};

export default Header;
