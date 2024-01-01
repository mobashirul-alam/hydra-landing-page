import Image from "next/image";

const ContactPromo = () => {
    return (
        <div className="z-50 mt-28 px-[84px]">
            <div className="flex flex-shrink-0 items-center justify-around gap-12 rounded-[90px] bg-[radial-gradient(2900.76%_50.13%_at_50%_53.89%,rgba(58,52,86,0.95)_0%,#211E2E_100%)] py-7 px-10 mb-24 z-50">
                <div className="flex items-center justify-center z-50">
                    <Image
                        alt=""
                        src={"/Location-Icon.svg"}
                        width={70}
                        height={70}
                    />
                    <div>
                        <p className="text-white text-2xl font-bold mb-2">
                            Pay Us a Visit
                        </p>
                        <p className="text-white text-sm">
                            Union St, Seattle, WA 98101, United States
                        </p>
                    </div>
                </div>

                <div className="w-[1px] h-28 bg-[rgba(192,183,232,0.33)]" />

                <div className="flex items-center justify-center gap-x-6">
                    <Image
                        alt=""
                        src={"/phone-call.svg"}
                        width={70}
                        height={70}
                    />
                    <div>
                        <p className="text-white text-2xl font-bold mb-2">
                            Give Us a Call
                        </p>
                        <p className="text-white text-sm">(110) 111-1010</p>
                    </div>
                </div>

                <div className="w-[1px] h-28 bg-[rgba(192,183,232,0.33)]" />

                <div className="flex items-center justify-center gap-x-6">
                    <Image alt="" src={"/mail.svg"} width={70} height={70} />
                    <div>
                        <p className="text-white text-2xl font-bold mb-2">
                            Send Us a Message
                        </p>
                        <p className="text-white text-sm">
                            Contact@HydraVTech.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPromo;
