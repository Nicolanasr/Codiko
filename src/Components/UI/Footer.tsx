import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaEnvelope, FaPhoneAlt, FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa"

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer>
            <div className="border-t border-white border-opacity-5">
                <div className="container py-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                    <div className="">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/codiko.png"
                                height={50}
                                width={130}
                                alt="codiko logo"
                                className="object-contain filter brightness-0 invert"
                            />
                        </Link>
                        <p className="text-xs mt-4 tracking-wider leading-loose text-opacity-50 font-light max-w-sm">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique temporibus tempora quia, quibusdam ducimus harum
                            provident consequatur nostrum
                        </p>
                        <div className="h-[1px] bg-lightblue w-24 mt-8"></div>
                    </div>
                    <div>
                        <h4 className=" text-lg tracking-wide flex items-center">
                            <span className="h-6 w-2 bg-lightblue inline-block mr-4"></span> OVERVIEW
                        </h4>
                        <ul className="mt-6 flex flex-col gap-4 font-light">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="#about-us">About</Link>
                            </li>
                            <li>
                                <Link href="#services">Services</Link>
                            </li>
                            <li>
                                <Link href="#projects">Pojects</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className=" text-lg tracking-wide flex items-center">
                            <span className="h-6 w-2 bg-lightblue inline-block mr-4"></span> CONTACT
                        </h4>
                        <div className="mt-6">
                            <div className="mt-4 flex items-center gap-2">
                                <FaEnvelope />
                                <a href="mailto:info@codikodev.com">info@codikodev.com</a>
                            </div>

                            <div className="mt-4 flex items-center gap-2">
                                <FaPhoneAlt />
                                <a href="tel:+96171365663">+961 71 365 663</a>
                            </div>

                            <div className="flex gap-6 mt-6" >
                                <Link href="https://www.instagram.com/codikodev/" target="_blank" className="group rounded-full p-2 w-10 h-10 border border-lightblue hover:bg-lightblue transition-all">
                                    <FaInstagram className=" m-auto w-full opacity-70 h-full group-hover:opacity-100 transition-all" />
                                </Link>
                                <Link href="https://wa.me/+96171365663" target="_blank" className="group rounded-full p-2 w-10 h-10 border border-lightblue hover:bg-lightblue transition-all">
                                    <FaWhatsapp className=" m-auto w-full opacity-70 h-full group-hover:opacity-100 transition-all" />
                                </Link>
                                <Link href="#" target="_blank" className="group rounded-full p-2 w-10 h-10 border border-lightblue hover:bg-lightblue transition-all">
                                    <FaFacebook className=" m-auto w-full opacity-70 h-full group-hover:opacity-100 transition-all" />
                                </Link>
                                <Link href="#" target="_blank" className="group rounded-full p-2 w-10 h-10 border border-lightblue hover:bg-lightblue transition-all">
                                    <FaLinkedin className=" m-auto w-full opacity-70 h-full group-hover:opacity-100 transition-all" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#171C22] py-3">
                <div className="text-center text-xs container">
                    <Link href="//" className="text-white text-opacity-50 tracking-widest">
                        <span className="transition-all hover:text-white underline underline-offset-2 ">CODIKO DEV</span> © ALL RIGHTS RESERVED •{" "}
                        {new Date().getFullYear()}
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
