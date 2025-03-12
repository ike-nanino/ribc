import Image from 'next/image'
import React from 'react'

function SettingsFooter({ type = 'desktop' }: FooterProps) {
    return (
        <footer className="footer">

            <div className="footer_image">
                <Image src="/assets/icons/settings.svg" fill alt="jsm" />
            </div>

            <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>

                <p className="text-14 truncate font-normal text-gray-600">
                    Settings
                </p>
            </div>
            {/* 
         <div className="footer_image">
           <Image src="/assets/icons/settings.svg" fill alt="jsm" />
         </div> */}


        </footer>
    )
}

export default SettingsFooter
