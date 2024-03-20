import ServicesLayout from "@/app/services/layout";
import React from "react";
import { Metadata } from "next";

import path from "path";
import { promises as fs } from "fs";
import { twoDigits } from "@/utils/functions";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Our Services - Codiko",
    description: "Our Services - Codiko",
};

const getData = async () => {
    const jsonDirectory = path.join(process.cwd(), "/src/data/services");
    const fileContents: any = await fs.readFile(jsonDirectory + "/services-data.json", "utf8");

    return JSON.parse(fileContents)["services"];
};

const MyServicePage = async ({ params }: any) => {
    const data = await getData();
    const pageData: ServiceType | undefined = data.find((item: ServiceType) => item.slug === params.service);

    return (
        pageData && (
            < >
                <div className="mt-4">
                    <h2 className="tracking-normal">
                        <span className="text-lightblue text-xl font-medium">{twoDigits(pageData?.order)}. </span> {pageData?.title}
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-4 mt-2 services-description">
                        <div className="flex-1 ">
                            <h4>Overview:</h4>
                            <p >
                                {pageData.short_description}
                            </p>
                            {pageData.full_description && (
                                <div
                                    className={pageData.image || pageData.features ? "max-w-md" : ""}
                                    dangerouslySetInnerHTML={{ __html: pageData.full_description }}
                                />
                            )}
                        </div>
                        {pageData.image || pageData.features ? (
                            <div className="flex-[0.7]">
                                {pageData.image && (
                                    <div className="relative w-full ">
                                        <Image src={pageData.image} height={500} width={500} alt="" className="object-cover" />
                                    </div>
                                )}
                                {pageData.features && (
                                    <ul className="mt-6 list-disc pl-4">
                                        {pageData.features.map((item, index) => (
                                            <li key={item + index} className="pb-2 mb-2 border-opacity-20 border-white border-b">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </>
        )
    );
};

export default MyServicePage;
