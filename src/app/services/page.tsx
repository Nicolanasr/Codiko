import { redirect, useRouter } from 'next/navigation';

import path from "path";
import { promises as fs } from "fs";
import { Metadata } from 'next';
import { useEffect } from 'react';
import Link from 'next/link';

const getData = async () => {
    const jsonDirectory = path.join(process.cwd(), "/src/data/services");
    const fileContents: any = await fs.readFile(jsonDirectory + "/services-data.json", "utf8");

    return JSON.parse(fileContents)["services"];
};

type Props = {}

export const metadata: Metadata = {
    title: "Codiko - Comprehensive Web Design & Software Development Services",
    description: "Explore a comprehensive suite of services encompassing web design and software development tailored to meet your unique business needs. From captivating website creation to robust software solutions, Codiko delivers excellence with a focus on innovation and client satisfaction. Discover how we can elevate your digital presence today.",
    openGraph: {
        title: "Comprehensive Web Design & Software Development Services  - Codiko",
        description: "xplore a comprehensive suite of services encompassing web design and software development tailored to meet your unique business needs. From captivating website creation to robust software solutions, Codiko delivers excellence with a focus on innovation and client satisfaction. Discover how we can elevate your digital presence today.",
    }
};

const ServicesPage = async (props: Props) => {
    const data: ServiceType[] = await getData();

    redirect(`/services/${data[0]?.slug}`)

    return (
        <h1>
            <Link className='my-32' href={`/services/${data[0]?.slug}`}>{data[0]?.title}</Link>

        </h1>
    )
}

export default ServicesPage
