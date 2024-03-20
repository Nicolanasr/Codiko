"use client";

import { generateSlug, twoDigits } from "@/utils/functions";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = { children: React.ReactNode; servicesData?: ServiceType[] };

const ServicesLayout = ({ children, servicesData }: Props) => {
    const path = usePathname();

    return (
        <div className="container py-32">
            <div className="flex relative">
                <nav className="pr-12 sticky top-24 h-fit">
                    <ul className="space-y-8">
                        {servicesData?.map((item, index) => {
                            const url = `/services/${item.slug || generateSlug(item.title)}`;

                            return (
                                <li key={url} className="">
                                    <Link
                                        href={url}
                                        className={`group relative text-xl ${path === url ? "text-gray-50 font-bold" : "text-gray-400"
                                            } hover:text-gray-50 transition-all`}
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
                <div className="flex-1 h-screen">{children}</div>
            </div>
        </div>
    );
};

export default ServicesLayout;
