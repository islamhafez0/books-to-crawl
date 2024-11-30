import BookCard from "./BookCard";
import { Book } from "./interface";
import Breadcrumb from "./Breadcrumb";

const BookList = ({
  books,
  loading,
  error,
  currentPage,
  totalPages,
  getNextPage,
  getPrevPage,
}: {
  books: Book[];
  loading: boolean;
  error: string;
  currentPage: number;
  totalPages: number | null;
  getNextPage: () => void;
  getPrevPage: () => void;
}) => {
  if (loading) {
    return "Loading...";
  } else if (error) {
    return <p className="text-center error">{error}</p>;
  }
  const randomizedBooks = books.sort(() => Math.random() - 0.5);
  return (
    <div className="books_container">
      {!loading && !error && <Breadcrumb />}
      <ul className="container">
        {randomizedBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </ul>
      {!loading && books.length > 0 && (
        <>
          <div className="pagination">
            <button
              onClick={getPrevPage}
              className={`${currentPage == 1 ? "disabled" : ""}`}
            >
              previous
            </button>
            <p>
              page {currentPage} of {totalPages}
            </p>
            <button onClick={getNextPage}>next</button>
          </div>
          <p className="copyright">
            &copy; Eslam Hafez {new Date().getFullYear()}
          </p>
        </>
      )}
    </div>
  );
};

export default BookList;
