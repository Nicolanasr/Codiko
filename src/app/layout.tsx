import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
    title: "Codiko",
    description: "Codiko",
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
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
