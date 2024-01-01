import Image from "next/image";

const infos = [
    {
        id: 1,
        title: "SIMULATION",
        description:
            "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
        img: "/student-with-vr.png",
    },
    {
        id: 2,
        title: "EDUCATION",
        description:
            "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
        img: "/man-outdoor.png",
    },
    {
        id: 3,
        title: "SELF-CARE",
        description:
            "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
        img: "/student-with-vr.png",
    },
    {
        id: 4,
        title: "OUTDOOR",
        description:
            "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
        img: "/man-outdoor.png",
    },
];

const WhyHydra = () => {
    return (
        <div className="mb-28">
            <div className="text-white flex items-center mb-28 px-[84px]">
                <div className="flex-1">
                    <div className="mt-8">
                        <h2 className="text-4xl font-bold">WHY BUILD</h2>
                        <div className="flex items-center gap-x-8 -mt-4">
                            <p className="text-4xl font-light">WITH HYDRA</p>
                            <div className="flex items-center">
                                <Image
                                    src={"/line-1.svg"}
                                    alt=""
                                    height={0}
                                    width={158}
                                    className="-mr-[29px]"
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
                <div className="flex-1">
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
                {/* Promo card */}
                <div className="grid grid-cols-4 gap-x-3 px-[84px]">
                    {infos.map((info) => (
                        <div
                            key={info.id}
                            className="rounded-[40px] bg-[radial-gradient(50%_50%_at_50%_50%,#433D60_0%,#211E2E_100%)] pt-6 px-7 pb-10 text-white flex flex-col items-center z-50"
                        >
                            <div className="rounded-full w-[220px] h-[220px] bg-[rgba(14,14,14,0.32)] p-[15px] mb-5">
                                <Image
                                    alt=""
                                    src={info.img}
                                    height={190}
                                    width={190}
                                    className="rounded-full"
                                />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">
                                {info.title}
                            </h2>
                            <div className="w-[154px] h-[1px] bg-[rgba(192,183,232,0.33)] mb-5"></div>
                            <p className="text-xs mb-9">{info.description}</p>
                            <button className="text-[#343045] text-xs font-bold bg-[linear-gradient(90deg,#8176AF_0%,#C0B7E8_100%)] rounded-[40px] px-10 py-4">
                                TRY IT NOW
                            </button>
                        </div>
                    ))}
                </div>
                <div className="absolute top-0">
                    <Image
                        alt="line"
                        src={"/why-hydra-line.svg"}
                        width={1442}
                        height={814}
                    />
                </div>
            </div>
        </div>
    );
};

export default WhyHydra;
