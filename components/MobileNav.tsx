'use client'

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

  return (
    <section className="w-fulll max-w-[264px]">
      <Sheet>
        <SheetTrigger>
    
        <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} className="text-2xl font-extrabold text-blue-800" />
          
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
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
          
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-10 text-black">
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

            <Footer type="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav