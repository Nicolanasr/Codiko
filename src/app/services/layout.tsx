import ServicesNavbar from "@/Components/ServicesNavbar";
import React from "react";

type Props = { children: React.ReactNode };

import path from "path";
import { promises as fs } from "fs";

const getData = async () => {
    const jsonDirectory = path.join(process.cwd(), "/src/data/services");
    const fileContents: any = await fs.readFile(jsonDirectory + "/services-data.json", "utf8");

    return JSON.parse(fileContents)["services"];
};


const ServicesLayout = async ({ children }: Props) => {
    const data = await getData();

    return (
        <div className="container py-20">
            <div className="flex flex-col md:flex-row relative">
                <ServicesNavbar data={data} />
                <div className="flex-1">{children}</div>
            </div>
        </div>
    );
};

export default ServicesLayout;
