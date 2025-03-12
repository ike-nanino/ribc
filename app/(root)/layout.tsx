import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex h-screen w-full overflow-hidden'>
 
    <Sidebar />

  
  {/* Scrollable content area */}
  <div className="flex-1 flex flex-col overflow-hidden xl:pl-10">
    {/* Fixed header */}
    <div className="flex h-16 items-center justify-between p-5 sm:p-8 md:hidden">
      <Image 
        src="/assets/images/osbicanada.png" 
        width={120} 
        height={120} 
        alt="logo" 
      />
      <div>
        <MobileNav />
      </div>
    </div>

    {/* Scrollable content container */}
    <div className="flex-1 overflow-y-auto">
      {children}
      <Toaster position="top-right" richColors />
    </div>
  </div>
</main>
  )
}