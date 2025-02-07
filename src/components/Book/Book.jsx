import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";


const Book = ({ book }) => {

    const { bookId,image, bookName, author, tags, category, rating } = book;


    return (
        <Link to = {`/books/${bookId}`}>
            <div className="card bg-base-100 w-96  p-6 border-2 border-gray-100">
                <figure className="bg-gray-200 py-8 rounded-2xl">
                    <img className="h-[166px] "
                        src={image}
                        alt={bookName} />
                </figure>

                <div className="mt-3 flex gap-3">
                    {
                        tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-gray-100 text-green-400  font-bold">{tag}</button>)
                    }
                </div>

                <div className="card-body">
                    <h2 className="card-title"> {bookName} </h2>
                    <p>By : {author}</p>
                    <div className="border-t-2 border-dashed border-gray-300 py-1"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge ">{rating} <CiStar className="text-2xl ml-2" /> </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;