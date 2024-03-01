import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    title: string;
    text: string;
    button: {
        text: string;
        url: string;
    }
}

const ServiceCard = ({ button, text, title }: Props) => {
    return (
        <div className="group px-8 h-full border-r-[1px] flex border-[#00000052] relative">
            <div className="opacity-0 group-hover:opacity-100 transition-all bg-bluegrey !text-[#fff] overflow-hidden absolute bottom-0 top-0 group-hover:-top-32 left-0 right-0 z-10 rounded-t-[50px]">
                <div className="absolute h-[80px] left-0 top-14 right-0">
                    <Image src="/dotter-square-large-white 1.png" fill className="object-contain object-left" alt="dotted" />
                </div>

                <div className="absolute h-[80px] -left-16 -bottom-8 right-0">
                    <Image src="/dotter-square-large-white 1.png" fill className="object-contain object-left" alt="dotted" />
                </div>
            </div>
            <div className="my-auto relative z-[11] group-hover:text-[#fff] top-0 group-hover:-top-8 transition-all">
                <h3 className="text-xl font-[500] ">{title}</h3>
                <p className="mt-2">
                    {text}
                </p>
                <Link className="text-lightblue font-[500] mt-4 inline-block" href={button.url}>
                    {button.text} →
                </Link>
            </div>
        </div>

    )
}

export default ServiceCard