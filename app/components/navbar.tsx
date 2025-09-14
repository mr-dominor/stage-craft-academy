'use client'
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Ticket } from 'lucide-react';
import { poppins } from "./fonts";
import Navlinks from "../utils/navlink";
import { AppSidebar } from "./sidebar";

const Navbar = () => {
    const [open,setOpen] = useState(false);
    return (
        <div className="w-full h-16 flex items-center justify-between">
            <div className="relative w-12 h-12 rounded-md overflow-hidden">
                <Image
                src={`/mine/stagecraft.png`}
                alt={"img-logo"}
                fill
                />
            </div>
            <div className="text-white hidden md:block">
                <Navlinks />
            </div>
            <div className="hidden md:block group">
                <Button variant={"default"}  className="bg-white text-black hover:bg-gray-200"><Ticket /></Button>
                <p className={`absolute text-xs text-gray-100
                opacity-0 translate-y-1
                transition-all duration-300 ease-in-out
                group-hover:opacity-100 group-hover:translate-y-0 ${poppins.className}`}>Tickets</p>
            </div>
             <div className={`block md:hidden group`}>
               <Button variant={"default"} size={"lg"} onClick={()=>setOpen(!open)} className={`bg-white text-black hover:bg-gray-200 `}><Menu /></Button>
               <p className={`absolute text-xs text-gray-100
                opacity-0 translate-y-1
                transition-all duration-300 ease-in-out
                group-hover:opacity-100 group-hover:translate-y-0 ${poppins.className}`}>Navigate</p>
            </div>
            <AppSidebar open={open} onOpenChange={setOpen} />
        </div>
    );
}

export default Navbar;