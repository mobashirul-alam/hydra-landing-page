import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

const Banner = () => {
    return (
        <div>
            <div className="flex justify-between items-center mt-16 mb-20">
                <div>
                    <p
                        className={`${montserrat.className} text-white text-[40px] font-bold mb-9`}
                    >
                        <span className="bg-clip-text text-transparent bg-[linear-gradient(92deg,#C0B7E8_-1.02%,#8176AF_36.25%)]">
                            Dive
                        </span>{" "}
                        Into The Depths
                        <br />
                        Of{" "}
                        <span className="bg-clip-text text-transparent bg-[linear-gradient(92deg,#C0B7E8_-1.02%,#8176AF_36.25%)]">
                            Virtual Reality
                        </span>
                    </p>
                    <p
                        className={`${montserrat.className} w-[450px] text-white mb-16`}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        nisl tincidunt eget. Lectus mauris eros in vitae .
                    </p>
                    <div className="flex items-center gap-0 hover:gap-x-4 duration-500">
                        <button
                            className={`${montserrat.className} duration-500 px-10 h-[48px] rounded-[40px] text-center text-xs font-bold text-[#343045] bg-[linear-gradient(90deg,#8176AF_0%,#C0B7E8_100%)] hover:bg-[linear-gradient(180deg,#8176AF_0%,#C0B7E8_100%)]`}
                        >
                            BUILD YOUR WORLD
                        </button>
                        <Image
                            alt=""
                            src={"/arrow-small-right.svg"}
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                {/* Image section */}
                <div>
                    <div className="w-[524px] h-[455px] pt-[14px] pb-[15px] pl-[16px] pr-[18px] rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[240px] bg-black bg-opacity-15">
                        <div
                            className="w-full h-full rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[240px]"
                            style={{
                                background: `url(${"/ban.jpg"})`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
