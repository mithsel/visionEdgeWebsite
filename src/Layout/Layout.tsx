import { Contact } from "../components/Contact";
import Hero from "../components/Hero";
import { Portfolio } from "../components/Portfolio";
import { Pricing } from "../components/Pricing";
import { Services } from "../components/Services";
import { Stats } from "../components/Stats";
import { Testimonials } from "../components/Testimonials";

export default function Layout() {
    return (
        <>
            <Hero />
            <Stats />
            <Services />
            <Portfolio />
            <Testimonials />
            <Pricing />
            <Contact />
        </>
    )
}