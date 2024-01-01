import Image from "next/image";

const About = () => {
    return (
        <div className="relative px-[84px]">
            <div className="my-28">
                <div className="flex items-center gap-x-28">
                    <div
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        className="flex-1 w-[524px] h-[557px] rounded-[240px_100px] z-50"
                    >
                        <div
                            className="w-[524px] h-full rounded-[240px_100px] bg-white bg-no-repeat"
                            style={{
                                background: `url(${"/banner-about.png"})`,
                            }}
                        ></div>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        className="text-white flex-1"
                    >
                        <p className="text-4xl font-bold mb-1">ABOUT</p>
                        <p className="text-4xl font-light text-opacity-95 mb-10">
                            HYDRA VR
                        </p>
                        <p>
                            Eget mi proin sed libero enim sed faucibus turpis.
                            Nisl rhoncus mattis rhoncus urna neque viverra
                            justo. Vivamus at augue eget arcu dictum. Ultrices
                            gravida dictum fusce ut placerat orci. Aenean et
                            tortor at risus viverra adipiscing at in. Mattis
                            aliquam faucibus purus in massa. Est placerat in
                            egestas erat imperdiet sed. Consequat semper viverra
                            nam libero justo laoreet sit amet. Aliquam etiam
                            erat velit scelerisque in dictum non consectetur a.
                            Laoreet sit amet cursus sit amet. Vel eros donec ac
                            odio tempor orci dapibus. Sem nulla pha retra diam
                            sit amet nisl suscipit adipiscing bibendum. Leo a
                            diam sollicitudi n tempor.
                        </p>
                        <button
                            className={`duration-500 px-10 h-[48px] rounded-[40px] text-center text-xs font-bold text-[#343045] bg-[linear-gradient(90deg,#8176AF_0%,#C0B7E8_100%)] hover:bg-[linear-gradient(180deg,#8176AF_0%,#C0B7E8_100%)] mt-7`}
                        >
                            LET&apos;S GET IN TOUCH
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 rotate-3 -left-16">
                <Image
                    alt="line"
                    src={"/about-line-1.svg"}
                    width={1449}
                    height={257}
                />
            </div>
            <div className="absolute bottom-24 rotate-3 -left-16">
                <Image
                    alt="line"
                    src={"/about-line-2.svg"}
                    width={1445}
                    height={212}
                />
            </div>
        </div>
    );
};

export default About;
