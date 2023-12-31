import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

const Banner = () => {
    return (
        <div>
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-0 md:mt-16 mb-20 relative px-6 lg:px-[84px]">
                <div className="relative">
                    <div
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                    >
                        <p
                            className={`${montserrat.className} text-white text-3xl md:text-[40px] font-bold mb-0 md:mb-9 text-center lg:text-left mt-8 lg:mt-0`}
                        >
                            <span className="bg-clip-text text-transparent bg-[linear-gradient(92deg,#C0B7E8_-1.02%,#8176AF_36.25%)] md:text-[56px]">
                                Dive
                            </span>{" "}
                            Into The Depths
                        </p>
                        <p
                            className={`${montserrat.className} text-white text-3xl md:text-[40px] font-bold mb-9 text-center lg:text-left mt-4 lg:mt-0`}
                        >
                            Of{" "}
                            <span className="bg-clip-text text-transparent bg-[linear-gradient(92deg,#C0B7E8_-1.02%,#8176AF_36.25%)] md:text-[56px]">
                                Virtual Reality
                            </span>
                        </p>
                        <p
                            className={`${montserrat.className} w-[450px] text-white mb-16 hidden md:block`}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore nisl tincidunt eget. Lectus mauris eros in
                            vitae .
                        </p>
                        <div className="flex justify-center lg:justify-start items-center gap-0 hover:gap-x-4 duration-500">
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
                                className="hidden lg:block"
                            />
                        </div>
                    </div>
                    <div className="absolute -top-5 -left-16 -z-0">
                        <Image
                            alt="line"
                            src={"/banner-line-4.svg"}
                            width={238}
                            height={565}
                        />
                    </div>
                </div>
                {/* Image section */}
                <div
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    className="z-50"
                >
                    <div className="w-[340px] md:w-[524px] h-[296px] md:h-[455px] pt-[14px] pb-[15px] pl-[16px] pr-[18px] rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[240px] bg-black bg-opacity-15">
                        <div
                            className="w-full h-full rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[240px]"
                            style={{
                                background: `url(${"/ban.jpg"})`,
                            }}
                        ></div>
                    </div>
                </div>
                {/* line -1 */}
                <div className="hidden lg:block absolute -right-28 -bottom-24 -z-0">
                    <Image
                        alt="line"
                        src={"/banner-line-3.svg"}
                        width={735}
                        height={419}
                    />
                </div>
                {/* line -2 */}
                <div className="hidden lg:block absolute -top-[106px] -right-6 -z-0">
                    <Image
                        alt="line"
                        src={"/banner-line-1.svg"}
                        width={414}
                        height={669}
                    />
                </div>
                {/* line -3 */}
                <div className="hidden lg:block absolute -top-[266px] right-24 -rotate-2 -z-0">
                    <Image
                        alt="line"
                        src={"/banner-line-2.svg"}
                        width={377}
                        height={845}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
