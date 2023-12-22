import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });
const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center py-12">
            {/* Logo */}
            <div className="flex items-center gap-x-4">
                <Image
                    alt="logo"
                    src={"/logo-start.svg"}
                    width={102}
                    height={103}
                />
                <Image
                    alt="logo"
                    src={"/logo-end.svg"}
                    className="mb-3"
                    width={76}
                    height={46}
                />
            </div>
            {/* Link */}
            <div
                className={`${montserrat.className} flex items-center gap-x-10 text-white text-xs font-bold tracking-wide leading-none`}
            >
                <Link href={"/"}>ABOUT</Link>
                <Link href={"/"}>SERVICES</Link>
                <Link href={"/"}>TECHNOLOGIES</Link>
                <Link href={"/"}>HOW TO</Link>
            </div>
            {/* Action buttons */}
            <div className="flex justify-end items-center gap-x-10">
                <button
                    className={`${montserrat.className} w-[154px] h-[48px] rounded-[40px] border-2 border-white text-center text-xs font-bold text-white hover:bg-white hover:bg-opacity-10 duration-300`}
                >
                    CONTACT US
                </button>
                <button
                    className={`${montserrat.className} w-[154px] h-[48px] rounded-[40px] text-center text-xs font-bold text-[#343045] bg-[linear-gradient(90deg,#8176AF_0%,#C0B7E8_100%)] hover:bg-[linear-gradient(180deg,#8176AF_0%,#C0B7E8_100%)] duration-1000`}
                >
                    JOIN HYDRA
                </button>
            </div>
        </div>
    );
};

export default Navbar;
