"use server"

import { redirect, useRouter } from 'next/navigation';

import path from "path";
import { promises as fs } from "fs";

const getData = async () => {
    const jsonDirectory = path.join(process.cwd(), "/src/data/services");
    const fileContents: any = await fs.readFile(jsonDirectory + "/services-data.json", "utf8");

    return JSON.parse(fileContents)["services"];
};

type Props = {}


const ServicesPage = async (props: Props) => {
    const data: ServiceType[] = await getData();

    return (
        redirect(`/services/${data[0]?.slug}`)
    )
}

export default ServicesPage
