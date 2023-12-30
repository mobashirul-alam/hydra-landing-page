"use client";

import Image from "next/image";

const JoinForm = () => {
    return (
        <div className="mb-20">
            <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#403A5F_0%,#211E2E_100%)] rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-white py-24 px-28">
                <h1 className="text-4xl font-bold text-center mb-8">
                    JOIN HYDRA
                </h1>
                <Image
                    alt="img"
                    src={"/joinHydraLine.svg"}
                    width={414}
                    height={0}
                    className="mx-auto mb-5"
                />
                <h2 className="text-4xl font-light text-center mb-16">
                    Let&apos;s Build Your VR Experience
                </h2>

                {/* Form */}
                <div>
                    <form className="space-y-10">
                        <div className="flex items-center gap-x-3">
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="First Name"
                                className="w-full rounded-[40px] border-2 border-white text-sm font-normal px-10 h-[72px] bg-transparent"
                            />
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Last Name"
                                className="w-full rounded-[40px] border-2 border-white text-sm font-normal px-10 h-[72px] bg-transparent"
                            />
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-full rounded-[40px] border-2 border-white text-sm font-normal px-10 h-[72px] bg-transparent"
                            />
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Phone Number"
                                className="w-full rounded-[40px] border-2 border-white text-sm font-normal px-10 h-[72px] bg-transparent"
                            />
                        </div>
                        <div className="flex flex-col gap-y-10 items-center mb-12">
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                className="w-full rounded-[40px] border-2 border-white text-sm font-normal px-10 h-[72px] bg-transparent"
                            />
                            <textarea
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Tell us something ..."
                                className="w-full rounded-[40px] border-2 border-white text-sm font-normal px-10 py-7 h-[210px] bg-transparent"
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="text-[#343045] text-xs font-bold px-12 py-4 bg-[linear-gradient(90deg,#8176AF_0%,#C0B7E8_100%)] rounded-[40px]">
                                SEND TO HYDRA
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinForm;
