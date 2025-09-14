import Image from "next/image";
import { forum,poppins } from "../fonts";
const Boast = () =>{
    const explore = "Explore ->"
    const artist = "Stage Craft Artist's"
    return(
        <div className="my-2 flex flex-col md:flex-row rounded-lg overflow-hidden cursor-pointer">
            <div className="relative h-[500px] w-full md:w-2/6 overflow-hidden hover:scale-[1.05] transition-all ease-in-out">
                <Image
                src={`/mine/sca-1.png`}
                alt="Image"
                fill
                className="object-cover"
                />
                <div className="absolute right-[45%] top-[45%] px-2 border-2 rounded-2xl hover:bg-white">
                    <p className="text-white hover:text-purple-400 ">{explore}</p>
                </div>
            </div>
            <div className="relative h-[500px] w-full md:w-4/6 overflow-hidden hover:scale-[1.05] transition-all ease-in-out">
                <Image
                src={`/mine/sca3.png`}
                alt="Image"
                fill
                className="object-bottom-left object-cover"
                />
                <p className={`absolute bottom-1/4 left-12 text-6xl text-white ${forum.className}`}>{artist}</p>
                <p className={`absolute bottom-[19%] left-12 text-white ${poppins.className}`}>Bringing stories to life since 1965</p>
            </div>
        </div>
    );
}

export default Boast;