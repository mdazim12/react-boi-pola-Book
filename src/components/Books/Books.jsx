import React, { useEffect, useState } from 'react';

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className='my-12'>
            <h2 className='text-center text-4xl text-black font-bold'>Books</h2>
        </div>
    );
};

export default Books;