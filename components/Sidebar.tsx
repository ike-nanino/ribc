'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'
import { sidebarLinks } from '@/constant';
import Footer from './Footer';


function Sidebar() {

    const pathname = usePathname();
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link 
        href='/dashboard'
        className='mb-12 cursor-pointer items-center gap-2'
        >
        <Image 
        src='/assets/images/osbicanada.png'
        alt='SBILogo'
        width={120}
        height={120}
        priority
        
        />
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

          return (
            <Link href={item.route} key={item.label}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative size-6">
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}
      </nav>



      <Footer />
    </section>
  )
}

export default Sidebar
