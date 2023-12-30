// global import
import { Montserrat } from "next/font/google";

// components
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

// css import
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
    title: "Hydra",
    description: "A Virtual Reality support provider.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <div className="bg-[#302C42] min-h-screen">
                    <div className="mx-auto max-w-[1440px] px-[84px]">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
