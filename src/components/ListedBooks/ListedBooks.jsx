import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredMarkList } from '../../Utility/addToDB';
import Book from '../Book/Book';



const ListedBooks = () => {

    const [readList, setReadList] = useState([])

    const allBooks = useLoaderData();
    console.log(allBooks);

    useEffect(() => {
        const storedReadList = getStoredMarkList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadListInt)

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        
        setReadList(readBookList);

    },[])

    return (
        <div>
            <h2 className="Listed Books text-center">this is Listed books items</h2>

            <Tabs>
            <TabList>
                <Tab>Read List</Tab>
                <Tab>Wish List</Tab>
            </TabList>

            <TabPanel>
                <h2 className='text-2xl'>My Read List: {readList.length} </h2>

                {
                    readList.map(book => <Book key={book.bookId } book = {book}></Book>)
                }

            </TabPanel>
            <TabPanel>
                <h2 className='text-2xl'>My Wish list</h2>
            </TabPanel>
        </Tabs>
  
        </div >
    );
};

export default ListedBooks;