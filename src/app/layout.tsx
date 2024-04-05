import type { Metadata } from "next";
import { Roboto, Mukta_Vaani } from "next/font/google";
import "./globals.css";
import Header from "@/Components/UI/Header";
import Footer from "@/Components/UI/Footer";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["cyrillic", "latin"] });
const mukta_vaani = Mukta_Vaani({ weight: ["300", "400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Codiko - Web Design & Software Development Solutions",
    description:
        "Elevate your online presence with our top-tier web design and software development services. From stunning websites to cutting-edge software solutions, Codiko delivers excellence tailored to your needs. Discover how we can transform your digital landscape today.",
    metadataBase: new URL("https://codikodev.com/"),
    keywords: [
        "web design",
        "web design agency",
        "web development",
        "Software development solutions",
        "Custom web development",
        "Responsive website design",
        "Front-end development",
        "Back-end development",
        "Mobile app development",
        "E-commerce website design",
        "UI/UX design",
        "Content management systems (CMS)",
        "Web application development",
        "Website maintenance",
        "SEO optimization",
        "User interface design",
    ],

    openGraph: {
        type: "website",
        title: "Codiko - Web Design & Software Development Solutions",
        description:
            "Elevate your online presence with our top-tier web design and software development services. From stunning websites to cutting-edge software solutions, Codiko delivers excellence tailored to your needs. Discover how we can transform your digital landscape today.",
        images: ["https://codikodev.com/collaboration.jpg"],
        url: "https://codikodev.com/",
    },
    twitter: {
        card: "summary_large_image",
        title: "Codiko - Web Design & Software Development Solutions",
        description:
            "Elevate your online presence with our top-tier web design and software development services. From stunning websites to cutting-edge software solutions, Codiko delivers excellence tailored to your needs. Discover how we can transform your digital landscape today.",
        images: ["https://codikodev.com/collaboration.jpg"],
    },
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
