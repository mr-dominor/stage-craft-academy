import HeroSection from "@/app/components/home-content/Hero";
import Boast from "@/app/components/home-boast/boast";
const HomePage = () =>{
    return(
        <div className="text-white">
            <HeroSection />
            <Boast />
        </div>
    );
}

export default HomePage;