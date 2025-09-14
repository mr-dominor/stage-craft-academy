'use client';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Navlinks from "../utils/navlink";
import { poppins } from "./fonts";

type AppSidebarProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}


export function AppSidebar({open,onOpenChange}:AppSidebarProps) {
  return (
    <div className="absolute z-10">
        <Sheet open={open} onOpenChange={onOpenChange}>
  <SheetContent className="bg-black text-gray-100 ">
    <SheetHeader>
      <SheetTitle className={`text-white ${poppins.className}`}>Navigation Menu</SheetTitle>
      <div className="mt-10">
        <Navlinks />
      </div>
    </SheetHeader>
  </SheetContent>
</Sheet>
    </div>
  )
}