import { useLoaderData, useParams } from "react-router-dom";


const BookDetail = () => {

    const {bookId} = useParams();

    console.log(bookId)

    const data = useLoaderData();

    console.log(data)

    return (
        <div>
            <h2>This is Book Details</h2>
        </div>
    );
};

export default BookDetail;