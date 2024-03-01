import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="absolute left-0 right-0 top-0 z-20 h-16 py-3">
            <div className="container relative h-full w-full ">
                <Link href="/" className="inline-block h-full w-[135px] relative">
                    <Image src="/codiko.png" fill alt="codiko logo" className="object-contain filter brightness-0 invert" />
                </Link>
            </div>
        </header>
    );
};

export default Header;
