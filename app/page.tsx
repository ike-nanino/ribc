import AboutUs from '@/components/home/AboutUs';
import FirstTable from '@/components/home/FirstTable';
import HeroSlider from '@/components/home/HeroSlider';
import MobileNavHome from '@/components/home/MobileNavHome';
import MobileStuff from '@/components/home/MobileStuff';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      
      <header className='bg-blue-800 h-14 flex jusity-betweeen items-center'>
        <div className='bg-white relative w-48 h-14'>
          <Image
            src='/assets/images/ribc.png'
            alt='Logo'
            fill
            className='object-contain'
          />
        </div>

        <div className='flex-1'></div>

        <Link href='/sign-in'>
        <div className='py-3 px-2 bg-amber-400 h-14 hidden cursor-pointer hover:bg-amber-400/50 lg:inline'>
          Customer Login
        </div>
        </Link>
        

        <div className='mr-4 lg:hidden'>
          <MobileNavHome />
        </div>


      </header>

      <HeroSlider />

      <MobileStuff />

      <FirstTable />

      <WhyChooseUs />


      <AboutUs />


      {/* Footer */}
      <footer className="bg-blue-900 text-white">

        <div className="flex flex-wrap gap-4 mb-6 text-sm bg-blue-400 p-6">
          {['Sitemap', 'Privacy Policy', 'Security', 'Website T&C', 'Account T&C', 'OIC', 'Accessibility', 'Cookie Policy', 'Centers'].map(
            (item) => (
              <span key={item} className="border-r text-sm pr-4 last:border-0">
                {item}
              </span>
            )
          )}
        </div>
        <div className="flex justify-between pb-6 flex-col lg:flex-row px-6">
          <p>© Copy Rights Reserved 2018 Royal Investment Bank (APM Id : FQ_Info_2065)</p>
          <p>Website best viewed in 103bps and above</p>


        </div>

      </footer>

    </main>
  );
}