'use client';
import Image from "next/image";
import Slider from "./slider";
import InfoOne from "./info1";
const HeroSection = () =>{
    return(
        <>
            <div className="w-full flex gap-x-2 flex-col md:flex-row">
                 <div className="relative w-full md:w-4/6 my-2">
                    <Slider />
                 </div>
                 <div className="relative w-full md:w-2/6 my-2">
                    <InfoOne />
                 </div>
            </div>
        </>
    );
}

export default HeroSection;