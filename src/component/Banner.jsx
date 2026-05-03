import Image from 'next/image';
import React from 'react';
import bannerImage from '@/assets/bannerImage.png'

const Banner = () => {
    return (
        <div data-aos="zoom-in-right"  suppressHydrationWarning className='container mx-auto'>
            <div className='relative '>
                <Image src={bannerImage} alt='' className='w-full h-[350px] sm:h-[450px] md:h-[650px] object-cover rounded-t-2xl'></Image>
            </div>
            <div className='absolute top-16 sm:top-16 md:top-40 lg:top-80 text-white w-80 md:w-100 md:mx-5 lg:mx-55 px-3'>
                <h1 className='text-4xl md:text-6xl md:leading-15 font-bold'>Find Your <br /> <span className='text-[#f4c25c]'>Next Read</span></h1>
                <p>Explore stories, technology, science, and knowledge from the best
              authors around the world.</p>
              <button className="mt-6 bg-[#f4c25c] hover:bg-[#e6b24a] text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300">
              Browse Now
            </button>
            </div>
            
        </div>
    );
};

export default Banner;