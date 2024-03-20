"use client"

import { twoDigits } from '@/utils/functions';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {
    data?: ServiceType[]
}

const ServicesNavbar = ({ data }: Props) => {
    const path = usePathname();

    return (
        <nav className="pr-12 md:sticky top-0 h-fit py-20">
            <ul className="space-y-8">
                {data?.map((item, index) => {
                    const url = `/services/${item.slug}`;

                    return (
                        <li key={url} className="">
                            <Link
                                href={url}
                                className={`group relative text-xl ${path === url ? "text-gray-200 font-bold text-opacity-100" : "text-gray-400 text-opacity-30 "
                                    } hover:text-gray-50 hover:text-opacity-100 transition-all`}
                            >
                                {twoDigits(index + 1)} {item.title}{" "}
                                <span
                                    className={`h-[2px] absolute -bottom-1 left-0 right-unset w-0 group-hover:w-full transition-all bg-lightblue`}
                                ></span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default ServicesNavbar