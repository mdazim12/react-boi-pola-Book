import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className='my-12'>
            <h2 className='text-center text-4xl text-black font-bold'>Books: {books.length}</h2>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                    books.map(book =><Book 
                        key={book.bookId}
                        book = {book}
                        ></Book>)
                }
           </div>
        </div>
    );
};

export default Books;