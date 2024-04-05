import React from "react";

import path from "path";
import { promises as fs } from "fs";
import Image from "next/image";
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en'

const getData = async (params: any) => {
    const jsonDirectory = path.join(process.cwd(), "/src/data/blogs");
    const fileContents: any = await fs.readFile(jsonDirectory + "/blogs-data.json", "utf8");

    const data = JSON.parse(fileContents)["blogs"];

    const pageData: BlogsType | undefined = data.find((item: BlogsType) => item.slug === params.blog_id);

    return pageData;
};

TimeAgo.addDefaultLocale(en);

const BlogDetailsPage = async ({ params }: any) => {
    const data: BlogsType | undefined = await getData(params);

    if (!data) {
        return "Not Found";
    }

    const timeAgo = new TimeAgo('en-US')

    return (
        <div className="container mt-28 mb-14">
            <div className="mb-4 md:mb-0 w-full mx-auto relative">
                <div className="px-4 lg:px-0">
                    <h2 className="text-4xl font-semibold  leading-tight">{data.title}</h2>
                    <div>
                        <span className="py-2 text-lightblue inline-flex items-center justify-center mb-2">
                            {data.type}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{timeAgo.format(new Date(data.createdDate))}</span>
                    </div>
                </div>

                <div className="relative h-[500px] w-full">
                    <Image src={data.image || ""} fill className="w-full object-cover lg:rounded" alt={data.title} />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-12 blog-body">
                <div>
                    <div className="px-4 lg:px-0 mt-12  text-lg leading-relaxed w-full lg:w-3/4" dangerouslySetInnerHTML={{ __html: data.body }} />
                    <hr className="my-12" />
                    <div>
                        <b className="mr-2">Tags: </b>
                        {data.keywords.map((item, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsPage;
