import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const ListedBooks = () => {

    const allBooks = useLoaderData();
    console.log(allBooks)

    return (
        <div>
            <h2 className="Listed Books text-center">this is Listed books items</h2>

            <Tabs>
            <TabList>
                <Tab>Read List</Tab>
                <Tab>Wish List</Tab>
            </TabList>

            <TabPanel>
                <h2 className='text-2xl'>My Read List </h2>
            </TabPanel>
            <TabPanel>
                <h2 className='text-2xl'>My Wish list</h2>
            </TabPanel>
        </Tabs>
  
        </div >
    );
};

export default ListedBooks;