import Image from "next/image";

const Technology = () => {
    return (
        <div>
            <div
                className="rounded-[160px] w-full bg-[#211E2E] text-center text-white pt-28 pb-24 "
                style={{
                    background: `linear-gradient(0deg, rgba(48, 44, 66, 0.79) 0%, rgba(48, 44, 66, 0.79) 100%), url(${"/vr-tech-2.jpg"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <p className="text-4xl font-bold">TECHNOLOGIES & HARDWARE</p>
                <p className="text-4xl font-light">USED BY HYDRA VR.</p>
            </div>
            <div className="w-full flex justify-center -mt-[50px]">
                <div className="rounded-full bg-[rgba(14,14,14,0.32)] p-[15px] w-[100px] h-[100px]">
                    <div className="bg-[linear-gradient(268deg,#C0B7E8_-0.6%,#8176AF_98.31%)] rounded-full w-full h-full flex justify-center items-center">
                        <Image
                            alt=""
                            src={"/arrow-small-down.svg"}
                            width={60}
                            height={60}
                        />
                    </div>
                </div>
            </div>
            <div className=" flex items-center justify-between">
                <Image
                    alt=""
                    src={"/Hydra-Tech1.png"}
                    width={174}
                    height={174}
                />
                <Image
                    alt=""
                    src={"/Hydra-Tech2.png"}
                    width={252}
                    height={252}
                />
                <Image
                    alt=""
                    src={"/Hydra-Tech3.png"}
                    width={263}
                    height={263}
                />
                <Image
                    alt=""
                    src={"/Hydra-Tech4.png"}
                    width={282}
                    height={282}
                />
            </div>
        </div>
    );
};

export default Technology;
