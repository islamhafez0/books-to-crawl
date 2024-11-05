import { Link } from "react-router-dom";
import { Book } from "./interface";
import StarRating from "./StarRating";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <li className="product_main w-calc/5">
      <Link to={`/books/${book.id}`}>
        {book.img_url.includes(".jpg") ? (
          <img className="book-thumbnail" src={book.img_url} alt={book.title} />
        ) : (
          <div className="place-holder-image">
            <img src="/assets/book-placeholder.png" alt="placeholder" />
          </div>
        )}
      </Link>
      <StarRating rating={book.rating} />
      <p className="product_title">{book.title || "No title"}</p>
      <div className="price_info">
        <p className="product_price">{book.price}</p>
        <p className="product_availability">
          {book.availability.split(" (")[0].trim()}
        </p>
      </div>
      <button className="product_button">Add to backet</button>
    </li>
  );
};

export default BookCard;
