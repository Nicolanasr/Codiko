import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer>
            <div className="border-t border-white border-opacity-5">
                <div className="container py-8 grid grid-cols-2 md:grid-cols-5 gap-6">
                    <div className="col-span-2">
                        <Link href="/" className="inline-block">
                            <Image src="/codiko.png" height={50} width={130} alt="codiko logo" className="object-contain filter brightness-0 invert" />
                        </Link>
                        <p className="text-xs mt-4 tracking-wider leading-loose text-opacity-50 font-light max-w-sm">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique temporibus tempora quia, quibusdam ducimus harum provident consequatur nostrum
                        </p>
                        <div className="h-[1px] bg-lightblue w-24 mt-8"></div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="bg-[#171C22] py-3">
                <div className="text-center text-xs container">
                    <Link href="//" className="opacity-50 tracking-widest">CODIKO DEV © ALL RIGHTS RESERVED • {new Date().getFullYear()}</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
