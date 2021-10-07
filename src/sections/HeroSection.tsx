import Hero from "../components/Hero";
import HeroBackgroundImage from "../assets/images/hero.png";

const HeroSection = () => {
    return (
        <Hero 
            title="Link 2030"
            subtitle="Toekomstvisie op het Ecosysteem van de multifunctionele installaties"
            backgroundImage={{src: HeroBackgroundImage, alt: "Een neon-verlichte stad"}}
        />
            
    )
}


export default HeroSection