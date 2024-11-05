import { useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import { useEffect, useState } from "react";
import axios from "axios";
import { Book } from "./interface";
import StarRating from "./StarRating";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    const fetchSingleBook = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `http://127.0.0.1:5000/api/books/${id}`
        );
        if (data) {
          setBook(data);
        }
      } catch (error) {
        console.log(error);
        setError("Something went wrong please try again later!");
      } finally {
        setLoading(false);
      }
    };
    fetchSingleBook();
  }, []);
  if (error) {
    return <p className="text-center error">{error}</p>;
  } else if (loading) {
    return "Loading....";
  }
  return (
    <div className="product_details_wrapper">
      {!loading && !error && (
        <Breadcrumb
          category={book?.category}
          path={book?.title}
          bookId={book?.id}
        />
      )}
      <div className="product_details">
        <div className="image_wrapper">
          {book?.img_url.includes(".jpg") ? (
            <img src={book?.img_url} alt="" />
          ) : (
            <img
              src="/assets/book-placeholder.png"
              className="dummy"
              alt="placeholder"
            />
          )}
        </div>
        <div className="content">
          <h1 className="product_title">{book?.title}</h1>
          <p className="product_price">{book?.price}</p>
          <p className="product_availability">{book?.availability}</p>
          <StarRating rating={book?.rating!} />
          <hr />
          <div className="alert">
            <strong>Warning!</strong> This is a demo website for web scraping
            purposes. Prices and ratings here were randomly assigned and have no
            real meaning
          </div>
        </div>
      </div>
      {book?.description && (
        <div className="product_description">
          <h2>Product Description</h2>
          <hr />
          <p className="description">{book?.description}</p>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
