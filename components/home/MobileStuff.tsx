import Image from 'next/image';
import React from 'react';

function MobileStuff() {
  const imageData = [
    { src: '/assets/icons/branch.png', label: 'Download the YONO RIBC and apply for Student GIC' },
    { src: '/assets/icons/contact.png', label: 'Arrive in Canada & Activate your account' },
    { src: '/assets/icons/moneytransfer.png', label: 'Get your Wire transfer Details' },
    { src: '/assets/icons/phonetransfer.png', label: 'Transfer Money Anywhere' },
  ];

  return (
    <section className="my-4 p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imageData.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-8">
            <div className="overflow-hidden hover:scale-105 transition-transform">
              <Image
                src={item.src}
                alt={item.label}
                width={60}
                height={60}
                className="object-cover"
                quality={75}
              />
            </div>
            <p className="mt-3 text-center font-medium text-gray-700">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MobileStuff;