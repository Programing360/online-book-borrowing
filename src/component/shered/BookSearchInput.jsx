import React from 'react';
import AllBooksCart from '../AllBooksCart';

const BookSearchInput = async ({searchParams}) => {

    const queary = searchParams.query || '';

    const data = await fetch(`http://localhost:5000/Data?search=${queary}`)
    const booksData = await data.json()
    return (
        <div>
            <AllBooksCart allBooksData={booksData}></AllBooksCart>
        </div>
    );
};

export default BookSearchInput;