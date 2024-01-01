import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="relative">
            <div className="px-20 flex items-center text-white">
                <div className="z-50">
                    <Image
                        alt="logo"
                        src={"/logo-start.svg"}
                        width={185}
                        height={187}
                    />
                </div>
                <div className="ml-[100px] mr-[81px]">
                    <Image
                        alt="line"
                        src={"/footerLine.svg"}
                        width={6}
                        height={196}
                    />
                </div>
                <div className="flex flex-col">
                    <Link href={"/"} className="font-bold mb-3 text-sm">
                        ABOUT
                    </Link>
                    <Link href={"/"} className="font-bold mb-3 text-sm">
                        SERVICES
                    </Link>
                    <Link href={"/"} className="font-bold mb-3 text-sm">
                        TECHNOLOGIES
                    </Link>
                    <Link href={"/"} className="font-bold mb-3 text-sm">
                        HOW TO
                    </Link>
                    <Link href={"/"} className="font-bold text-sm">
                        JOIN HYDRA
                    </Link>
                </div>
                <div className="ml-[104px] mr-[107px]">
                    <Image
                        alt="line"
                        src={"/footerLine.svg"}
                        width={6}
                        height={196}
                    />
                </div>
                <div className="flex flex-col">
                    <Link href={"/"} className="font-bold mb-3 text-sm">
                        F.A.Q
                    </Link>
                    <Link href={"/"} className="font-bold mb-3 text-sm">
                        SITEMAP
                    </Link>
                    <Link href={"/"} className="font-bold mb-3 text-sm">
                        CONDITIONS
                    </Link>
                    <Link href={"/"} className="font-bold text-sm">
                        LICENSES
                    </Link>
                </div>
                <div className="ml-[70px] mr-[71px]">
                    <Image
                        alt="line"
                        src={"/footerLine.svg"}
                        width={6}
                        height={196}
                    />
                </div>
                <div>
                    <p className="text-sm font-bold mb-8">
                        SOCIALIZE WITH HYDRA
                    </p>
                    <div className="mb-10 flex items-center gap-x-5">
                        <Image
                            alt="social"
                            src={"/facebook.svg"}
                            height={32}
                            width={32}
                        />
                        <Image
                            alt="social"
                            src={"/instagram.svg"}
                            height={32}
                            width={32}
                        />
                        <Image
                            alt="social"
                            src={"/linkedin.svg"}
                            height={32}
                            width={32}
                        />
                        <Image
                            alt="social"
                            src={"/pinterest.svg"}
                            height={32}
                            width={32}
                        />
                        <Image
                            alt="social"
                            src={"/twitter.svg"}
                            height={32}
                            width={32}
                        />
                        <Image
                            alt="social"
                            src={"/youtube.svg"}
                            height={32}
                            width={32}
                        />
                    </div>
                    <div>
                        <button className="text-[#343045] text-xs font-bold px-10 py-4 bg-[linear-gradient(90deg,#8176AF_0%,#C0B7E8_100%)] rounded-[40px] whitespace-nowrap">
                            BUILD YOUR WORLD
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <Image
                    alt="line"
                    src={"/joinHydraLine.svg"}
                    width={1269}
                    height={0}
                    className="py-12"
                />
                <p className="text-xs font-bold tracking-[1.82px] text-center text-white pb-12">
                    2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS
                    RESERVED
                </p>
            </div>
            <div className="absolute -top-8 -rotate-2">
                <Image
                    alt="line"
                    src={"/footer-line-1.svg"}
                    width={1435}
                    height={363}
                />
            </div>
            <div className="absolute bottom-72">
                <Image
                    alt="line"
                    src={"/footer-line-2.svg"}
                    width={1438}
                    height={263}
                />
            </div>
        </div>
    );
};

export default Footer;
