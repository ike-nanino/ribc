'use client'


import { signOut } from "next-auth/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Footer from "./Footer"
import { sidebarLinks } from "@/constant"

const MobileNav = ({ user}: MobileNavProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleLinkClick = () => {
        setIsOpen(false);
      };

      const handleLogout = async () => {
        // Clear client-side cache and session
        await signOut({
          redirect: false, // We'll handle redirect manually
          callbackUrl: "/sign-in"
        });
        
        // Force a full page reload to clear all NextAuth session data
        window.location.href = "/sign-in";
      };

  return (
    <section className="w-fulll max-w-[264px]">
      <Sheet>
        <SheetTrigger>
    
        <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} className="text-2xl font-extrabold text-blue-800" />
          
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">

        <SheetTitle>
        <div className='mt-8 h-20'>
            <Link href="/profile" className="cursor-pointer flex justify-self-center items-center gap-1">
            <Image 
              src="/assets/images/osbicanada.png"
              width={120}
              height={120}
              alt="Logo"
            />
          </Link>

            </div>
          </SheetTitle>
            
          
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-10 mb-[120px] text-black">
                  {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                return (
                  <SheetClose asChild key={item.route}>
                    <Link href={item.route} key={item.label}
                      className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}
                      onClick={handleLinkClick}
                    >
                        <Image 
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            'brightness-[3] invert-0': isActive
                          })}
                          priority
                        />
                      <p className={cn("text-16 font-semibold text-black-2", { "text-white": isActive })}>
                        {item.label}
                      </p>
                    </Link>
                  </SheetClose>
                )
              })}

              </nav>



          
            </SheetClose>




            <div className="flex flex-col w-full justify-end" >
          <Link href='#'>
          <div className="footer pb-6">
          <div className="footer_image ">
                <Image src="/assets/icons/settings.svg" fill alt="settings" />
            </div>
            
          </div>
          </Link>

           
          <div className="footer pb-8 cursor-pointer" onClick={handleLogout}>
          <div className="footer_image" >
                <Image src="/assets/icons/logout.svg" fill alt="jsm" />
            </div>

            {/* <div className='hidden md:inline'>

                <p className="text-14 truncate font-normal text-gray-600">
                    Logout
                </p>
            </div> */}
          </div>


        </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav