import Image from "next/image";

const Introduction = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="300"
        >
            <div className="text-white flex items-center px-[84px]">
                <div className="flex-1">
                    <div className="mt-8">
                        <h2 className="text-4xl font-bold">INTRODUCTION</h2>
                        <div className="flex items-center gap-x-8 -mt-4">
                            <p className="text-4xl font-light">TO HYDRA VR</p>
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
        </div>
    );
};

export default Introduction;
