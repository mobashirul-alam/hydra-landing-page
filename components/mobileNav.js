"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="text-white">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                    <Image
                        alt="logo"
                        src={"/logo-start.svg"}
                        width={69}
                        height={59}
                    />
                    <Image
                        alt="logo"
                        src={"/logo-end.svg"}
                        className="mb-3"
                        width={46}
                        height={28}
                    />
                </div>
                <div>
                    <Image
                        alt="menuIcon"
                        src={"/Hamburger-Button.svg"}
                        width={33}
                        height={26}
                        onClick={() => setMenuOpen((prev) => !prev)}
                    />
                </div>
            </div>
            {menuOpen && (
                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    className="flex flex-col items-center gap-y-5  bg-white bg-opacity-5 py-10 rounded-3xl md:mx-6"
                >
                    {/* Link */}
                    <div
                        className={`flex flex-col items-center gap-y-5 text-white text-xs font-bold tracking-wide leading-none`}
                    >
                        <Link href={"/"}>ABOUT</Link>
                        <Link href={"/"}>SERVICES</Link>
                        <Link href={"/"}>TECHNOLOGIES</Link>
                        <Link href={"/"}>HOW TO</Link>
                    </div>
                    {/* Action buttons */}
                    <div className="flex flex-col justify-end items-center gap-y-5">
                        <button
                            className={`w-[154px] h-[48px] rounded-[40px] border-2 border-white text-center text-xs font-bold text-white hover:bg-white hover:bg-opacity-10 duration-300`}
                        >
                            CONTACT US
                        </button>
                        <button
                            className={`w-[154px] h-[48px] rounded-[40px] text-center text-xs font-bold text-[#343045] bg-[linear-gradient(90deg,#8176AF_0%,#C0B7E8_100%)] hover:bg-[linear-gradient(180deg,#8176AF_0%,#C0B7E8_100%)] duration-1000`}
                        >
                            JOIN HYDRA
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
