import AllBooksCart from '@/component/AllBooksCart';
import { allBooksData } from '@/lib/data';
import React from 'react';

const AllBooksPage = async () => {

    const allBooks = await allBooksData();
    

    return (
        <div>
            <AllBooksCart booksData={allBooks}></AllBooksCart>
        </div>
    );
};

export default AllBooksPage;