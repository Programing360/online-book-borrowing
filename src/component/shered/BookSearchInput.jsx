import React, { Suspense } from 'react';
import AllBooksCart from '../AllBooksCart';

const BookSearchInput = async ({searchParams}) => {

    const queary = searchParams.query || '';

    const data = await fetch(`http://localhost:5000/Data?search=${queary}`)
    const booksData = await data.json()
    return (
        <div>
            <Suspense fallback={<p className='text-center text-2xl font-bold'>Loading</p>}>
                <AllBooksCart allBooksData={booksData}></AllBooksCart>
            </Suspense>
        </div>
    );
};

export default BookSearchInput;