import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Hydra",
    description: "A Virtual Reality support provider.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="bg-[#302C42] min-h-screen">
                    <div className="mx-auto max-w-7xl">
                        <Navbar />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
