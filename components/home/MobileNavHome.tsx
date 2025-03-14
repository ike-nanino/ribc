'use client'

import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;
import Link from "next/link";




function MobileNavHome() {

     const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
      };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="flex justify-center items-center" asChild>
        <button
          className="flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} className="text-2xl font-extrabold text-white" />
        </button>
        </SheetTrigger>
        <SheetContent side='top' className='flex flex-col justify-center border-none shadow-none w-screen h-[100px]'>


            <SheetTitle className="text-center text-2xl text-black">
            <Link
            href="/sign-in"
            className="px-6 py-2 text-lg font-medium text-black bg-amber-400 rounded-md hover:bg-gold hover:text-black transition-all duration-300 cursor-pointer"
            onClick={handleLinkClick}
          >
           
            Customer Login
          </Link>

          </SheetTitle>


        </SheetContent>
    </Sheet>
  )
}

export default MobileNavHome