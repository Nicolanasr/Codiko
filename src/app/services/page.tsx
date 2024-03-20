import { GetStaticProps, Metadata } from 'next';
import React, { useEffect, useState } from 'react'
import ServicesLayout from '../../Components/Layout/ServicesLayout';


import path from "path";
import { promises as fs } from "fs";

type Props = {}


export const metadata: Metadata = {
    title: "Our Services - Codiko",
    description: "Our Services - Codiko",
};


const getData = async () => {
    const jsonDirectory = path.join(process.cwd(), "/src/data/services");
    const fileContents: any = await fs.readFile(jsonDirectory + "/services-data.json", "utf8");

    return JSON.parse(fileContents)["services"];
};

const ServicesPage = async (props: Props) => {
    const data = await getData();

    return (
        <ServicesLayout servicesData={data}>
            <></>
        </ServicesLayout>
    )
}

export default ServicesPage
