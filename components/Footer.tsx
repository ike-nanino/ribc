"use client";

import { signOut } from "next-auth/react";
import Image from 'next/image'
import Link from "next/link";

import React from 'react'

const Footer = ({ type = 'desktop'  }: FooterProps) => {


    const handleLogout = async () => {
        // Clear client-side cache and session
        await signOut({
          redirect: false, // We'll handle redirect manually
          callbackUrl: "/sign-in"
        });
        
        // Force a full page reload to clear all NextAuth session data
        window.location.href = "/sign-in";
      };

      const handleFreezeAlert = () => {
        alert("Temporal hold on account by CRA due to unpaid taxes withheld.");
      };
    

    return (
        <footer className="flex flex-col" >
          <Link href='#' onClick={handleFreezeAlert}>
          <div className="footer pb-6">
          <div className="footer_image ">
                <Image src="/assets/icons/settings.svg" fill alt="settings" />
            </div>

            {/* <div className='hidden md:inline'>

                <p className="text-14 truncate font-normal text-gray-600">
                    Settings
                </p>
            </div> */}
            
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


        </footer>
    )
}

export default Footer;