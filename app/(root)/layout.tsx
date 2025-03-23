import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { Viewport } from "next";
import Image from "next/image";
import { Toaster } from "sonner";

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  userScalable: false,

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='relative flex h-screen max-h-screen w-full overflow-hidden'>
 
    <Sidebar />

  
  {/* Scrollable content area */}

    {/* Fixed header */}
    <div className="absolute bg-white z-10 inset-0 flex h-16 items-center justify-between p-5 sm:p-8 md:hidden">
      <Image 
        src="/assets/images/osbicanada.png" 
        width={120} 
        height={120} 
        alt="logo" 
      />
      
        <MobileNav />
     
    </div>

    {/* Scrollable content container */}
    <div className="flex-1 overflow-y-auto xl:pl-10">
      {children}
      <Toaster position="top-right" richColors />
    </div>

</main>
  )
}