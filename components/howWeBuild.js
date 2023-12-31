import Image from "next/image";

const HowWeBuild = () => {
    const infos = [
        { id: 1, serial: "01", title: "3D Conception & Design" },
        { id: 2, serial: "02", title: "Interaction Design" },
        { id: 3, serial: "03", title: "VR World User Testing" },
        { id: 4, serial: "04", title: "Hydra VR Deploy" },
    ];
    return (
        <div className="mb-28">
            <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                className="text-white flex items-center mb-6 lg:mb-28 px-6 lg:px-[84px]"
            >
                <div className="flex-1">
                    <div className="mt-8">
                        <h2 className="text-4xl font-bold">HOW WE BUILD</h2>
                        <div className="flex items-center gap-x-4 lg:gap-x-8 -mt-4">
                            <p className="text-2xl lg:text-4xl font-light whitespace-nowrap">
                                WITH HYDRA VR?
                            </p>
                            <div className="flex items-center">
                                <Image
                                    src={"/line-1.svg"}
                                    alt=""
                                    height={0}
                                    width={158}
                                    className="-mr-[29px] hidden lg:block"
                                />
                                <Image
                                    src={"/arrow-small-right.svg"}
                                    alt=""
                                    height={0}
                                    width={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 hidden lg:block">
                    <p className="text-base font-normal text-justify">
                        Vitae sapien pellentesque habitant morbi tristique
                        senectus et netus et. Feugiat nibh sed pulvinar proin
                        gravida hendrerit lectus. Mi sit amet mauris commodo
                        quis imperdiet massa tincidunt nunc. Viverra aliquet
                        eget sit amet tellus. Ornare lectus sit amet est
                        placerat in. Lectus magna fringilla urna porttitor
                        rhoncus vitae.
                    </p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute top-0 z-0 hidden lg:block">
                    <Image
                        alt=""
                        src={"/how-build-vector.svg"}
                        width={1449}
                        height={163}
                    />
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    className="w-full grid grid-cols-2 lg:grid-cols-4 gap-x-5 lg:gap-x-[89px] z-50 lg:pl-[150px] lg:pr-[170px] px-3 lg:px-0"
                >
                    {infos.map((info) => (
                        <div
                            key={info.id}
                            className="flex flex-col items-center z-50"
                        >
                            <div className="h-[198px] w-[198px] bg-[rgba(13,13,13,0.32)] rounded-full p-5 md:mb-6">
                                <div className="bg-[linear-gradient(251deg,#C0B7E8_12.87%,#8176AF_89.33%)] rounded-full h-full flex items-center justify-center">
                                    <p className="text-[#343045] text-[64px] font-bold">
                                        {info.serial}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Image
                                    alt=""
                                    src={"/arrow-small-right1.svg"}
                                    height={67}
                                    width={67}
                                />
                                <p className="text-white text-sm lg:text-xl md:font-bold mt-4">
                                    {info.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowWeBuild;
