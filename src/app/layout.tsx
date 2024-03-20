import type { Metadata } from "next";
import { Roboto, Mukta_Vaani } from "next/font/google";
import "./globals.css";
import Header from "@/Components/UI/Header";
import Footer from "@/Components/UI/Footer";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["cyrillic", "latin"] });
const mukta_vaani = Mukta_Vaani({ weight: ["300", "400", "500", "700"], subsets: ["latin"] });


export const metadata: Metadata = {
    title: "Codiko",
    description: "Codiko dev",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" type="image/png" sizes="32x32" />
            </head>
            <body className={mukta_vaani.className}>
                <Toaster />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
