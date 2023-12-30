import About from "@/components/about";
import Banner from "@/components/banner";
import ContactPromo from "@/components/contactPromo";
import HowWeBuild from "@/components/howWeBuild";
import Introduction from "@/components/introduction";
import JoinForm from "@/components/joinForm";
import Technology from "@/components/technology";
import WhyHydra from "@/components/whyHydra";

export default function Home() {
    return (
        <div className="pb-20">
            <Banner />
            <ContactPromo />
            <Introduction />
            <About />
            <WhyHydra />
            <Technology />
            <HowWeBuild />
            <JoinForm />
        </div>
    );
}
