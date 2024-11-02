import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../Utility/addToDB";


const BookDetail = () => {

    const {bookId} = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData();
    

    const book = data.find(book => book.bookId === id)
    const {image,bookName,author,category,review,tags,totalPages,publisher,yearOfPublishing,rating} = book;

    const handleMarkAsRead = (id) =>{
       addToStoredReadList(id);
    }

    const handleWishList = (id) => {
        addToStoredWishList(id);
    }
   

    return (
        <div className="flex gap-5">
            <div className=" py-20 bg-gray-100 rounded-xl w-1/2 flex items-center">
                <img className="w-[200px] mx-auto " src={image} alt="" />
            </div>

            <div className="w-1/2">
                <h2 className="text-4xl font-bold">{bookName}</h2>
                <p className="text-2xl my-2 font-medium">By :{author}</p>
                <div className="divider"></div>
                <p className="text-xl my-1 font-medium">{category}</p>
                <p className="text-base my-1 "><span className="font-bold">Review: </span>{review}</p>

                <div className="my-3 flex gap-3">
                    {
                        tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-gray-100 text-green-400  font-bold">{tag}</button>)
                    }
                </div>

                <div className="divider"></div>
                <p className="text-mdmy-1 ">Number of pages : <span className="font-bold"> {totalPages}</span></p>
                <p className="text-md my-1 ">publisher: <span className="font-bold">{publisher}</span></p>
                <p className="text-md my-1 ">Year of publisher: <span className="font-bold">{yearOfPublishing}</span></p>
                <p className="text-md my-1 ">Rating: <span className="font-bold">{rating}</span></p>

                <div className="my-5">
                    <button onClick={()=> handleMarkAsRead(id)} className="btn btn-outline ">Mark as read</button>
                    <button onClick={()=> handleWishList(id)} className="btn btn-accent mx-4 text-white"> Add to Wishlist</button>

                </div>





            </div>
        </div>
    );
};

export default BookDetail;