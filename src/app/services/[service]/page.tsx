import React from "react";
import { Metadata } from "next";

import path from "path";
import { promises as fs } from "fs";
import { twoDigits } from "@/utils/functions";
import Image from "next/image";
import LottiePlayer from "@/Components/UI/LottiePlayer";

export const metadata: Metadata = {
    title: "Codiko - Comprehensive Web Design & Software Development Services",
    description: "Explore a comprehensive suite of services encompassing web design and software development tailored to meet your unique business needs. From captivating website creation to robust software solutions, Codiko delivers excellence with a focus on innovation and client satisfaction. Discover how we can elevate your digital presence today.",
    openGraph: {
        title: "Comprehensive Web Design & Software Development Services  - Codiko",
        description: "Explore a comprehensive suite of services encompassing web design and software development tailored to meet your unique business needs. From captivating website creation to robust software solutions, Codiko delivers excellence with a focus on innovation and client satisfaction. Discover how we can elevate your digital presence today.",
    }
};


const getData = async (params: any) => {
    const jsonDirectory = path.join(process.cwd(), "/src/data/services");
    const fileContents: any = await fs.readFile(jsonDirectory + "/services-data.json", "utf8");

    const data = JSON.parse(fileContents)["services"];

    const pageData: ServiceType | undefined = data.find((item: ServiceType) => item.slug === params.service);

    return pageData;
};

const MyServicePage = async ({ params }: any) => {
    const data: ServiceType | undefined = await getData(params);

    if (!data) {
        return "Not Found";
    }

    return (
        data && (
            < >
                <div className="mt-4" >
                    <h2 className="tracking-normal">
                        <span className="text-lightblue text-xl font-medium">{twoDigits(data?.order)}. </span> {data?.title}
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-4 mt-2 services-description">
                        <div className="flex-1 ">
                            <h4>Overview:</h4>
                            <p >
                                {data.short_description}
                            </p>
                            {data.full_description && (
                                <div
                                    className={data.image || data.features ? "max-w-md" : ""}
                                    dangerouslySetInnerHTML={{ __html: data.full_description }}
                                />
                            )}
                        </div>
                        {data.animation || data.image || data.features ? (
                            <div className="flex-[0.7]">
                                {data.animation &&
                                    <div className="-mt-14">
                                        <LottiePlayer json={data.animation} />
                                    </div>
                                }
                                {data.image && (
                                    <div className="relative w-full ">
                                        <Image src={data.image} height={500} width={500} alt="" className="object-cover" />
                                    </div>
                                )}
                                {data.features && (
                                    <ul className="mt-6 list-disc pl-4">
                                        {data.features.map((item, index) => (
                                            <li key={item + index} className="font-light tracking-wide text-gray-400 pb-2 mb-2 border-opacity-20 relative ">
                                                {item}
                                                <div className="absolute bottom-0 -left-4 right-4 h-[1px] bg-white opacity-30" style={{
                                                    background: "linear-gradient(90deg, rgba(109,177,191,1) 21%, rgba(84,146,159,1) 51%, rgba(109,177,191,1) 80%)"
                                                }}></div>


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
