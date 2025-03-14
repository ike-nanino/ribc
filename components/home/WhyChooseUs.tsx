import Image from 'next/image';
import React from 'react'

function WhyChooseUs() {
    const imageData = [
        { src: '/assets/icons/moneytransfer.png', label: 'Instant Processing', message: 'Our program offers fast processing of your GIC application, ensuring that you can get started with your studies in Canada without any delay' },
        { src: '/assets/icons/moneytransfer.png', label: 'Arrive in Canada & Activate your account', message: `You'll earn the best interest rates on your GIC investment with us, which means your money will work harder for you while you focus on your education.` },
        { src: '/assets/icons/moneytransfer.png', label: 'One Debit Card', message: `With our program, you'll receive one debit card that can be used anywhere in America and Europe, making it easier for you to manage your finances across both continents.` },
      ];
    
      return (
        <section className="my-6 p-4">

            <h1 className='text-2xl lg:text-4xl text-blue-900 px-2 lg:px-4'>
                Why Choose Us <br />

                SBI Canada Bank
            </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {imageData.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-8">
                <div className="overflow-hidden hover:scale-105 transition-transform">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={120}
                    height={120}
                    className="object-cover"
                    quality={75}
                  />
                </div>
                <p className="mt-3 text-center font-medium text-gray-700">
                  {item.label}
                </p>

                <p className="mt-6 text-center font-medium text-gray-500">
                        {item.message}
                </p>
              </div>
            ))}
          </div>
        </section>
      );
}

export default WhyChooseUs
