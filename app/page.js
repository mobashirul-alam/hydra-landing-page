import About from "@/components/about";
import Banner from "@/components/banner";
import ContactPromo from "@/components/contactPromo";
import Introduction from "@/components/introduction";
import WhyHydra from "@/components/whyHydra";

export default function Home() {
    return (
        <div className="pb-20">
            <Banner />
            <ContactPromo />
            <Introduction />
            <About />
            <WhyHydra />
        </div>
    );
}
