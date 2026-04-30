import Image from 'next/image';
import React from 'react';
import bannerImage from '@/assets/bannerImage.png'

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className='relative '>
                <Image src={bannerImage} alt=''></Image>
            </div>
            <div className='absolute top-80 text-white w-100 mx-55'>
                <h1 className='text-5xl leading-15 font-bold'>Find Your <br /> <span className='text-[#f4c25c]'>Next Read</span></h1>
                <p >Explore stories, technology, science, and knowledge from the best
              authors around the world.</p>
              <button className='btn mt-4'>Browse Now</button>
            </div>
            
        </div>
    );
};

export default Banner;