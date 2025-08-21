"use client";

import LogoutButton from "./LogoutButton";

const Footer = ({ type = 'desktop'  }: FooterProps) => {

      // const handleFreezeAlert = () => {
      //   alert("Temporal Hold On Account By CRA Due To Unpaid Taxes Withheld.");
      // };
    

    return (
        <footer className="flex flex-col">

         <LogoutButton />

        </footer>
    )
}

export default Footer;