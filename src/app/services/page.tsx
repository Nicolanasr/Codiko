"use server"

import { redirect, useRouter } from 'next/navigation';
import { getData } from './layout';

type Props = {}


const ServicesPage = async (props: Props) => {
    const data: ServiceType[] = await getData();

    return (
        redirect(`/services/${data[0]?.slug}`)
    )
}

export default ServicesPage
