import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
       <div className='container mx-auto text-center mt-40 space-y-4'>
            <h1 className='text-2xl font-bold'>Page Not Found</h1>
            <Link href={'/'}><button className='btn'>Home</button></Link>
        </div>  
    );
};

export default NotFound;