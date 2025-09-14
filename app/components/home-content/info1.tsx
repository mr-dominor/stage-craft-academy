'use-client'
import { poppins } from "../fonts";
import TiltDiv from "@/app/utils/framer-tilt";
const dramaList = {
    1:{
        "name":"Century of Love",
        "date":"12/09",
        "type":"Concert",
    },
    2:{
        "name":"Midnight Jazz",
        "date":"18/09",
        "type":"Performance",
    },
    3:{
        "name":"Vison Quest",
        "date":"19/09",
        "type":"Performance",
    }
}
const InfoOne = () =>{

    return(
        <div className={`bg-neutral-800 rounded-lg h-[500px] md:h-[600px] w-full p-3 ${poppins.className}`}>
            <div className="w-full">
                <h2 className=" font-semibold py-2">Trending Today</h2>
            </div>
             <TiltDiv classChild=" h-3/4 py-2 mt-4 w-full bg-black p-4">
            <ul className="bg-black my-auto w-full  rounded-lg py-2">
                {Object.values(dramaList).map((l,k)=>{
                    return(
                        <li key={k} className="px-2 py-4 text-neutral-200 cursor-pointer">
                            <div className="flex items-center justify-between border-b-1 py-2">
                                <div>
                                    <h3 className="text-xl">
                                        {l.name}
                                    </h3>
                                    <div className="bg-neutral-300 text-neutral-800 hover:scale-[1.07] hover:bg-blue-400 hover:text-white rounded-xl px-1 py-0.5 inline-block">
                                        <p className="text-xs">{l.type}</p>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-3xl">{l.date}</h2>
                                </div>
                            </div>
                        </li>
                    );
                })}
            
            </ul>
            </TiltDiv>
        </div>
    );
}

export default InfoOne