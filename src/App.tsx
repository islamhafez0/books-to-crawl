import axios from "axios";
import { useEffect, useState } from "react";
import { Book } from "./interface";
import { Navigate, Route, Routes, useSearchParams } from "react-router-dom";
import BookList from "./BookList";
import BookDetails from "./BookDetails";

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const perPage = 20;
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const endpoint = `${API_BASE_URL}?page=${page}&per_page=${perPage}`;
        const { data } = await axios.get(endpoint);
        if (data) {
          setBooks(data.books);
          setTotalPages(data.total_pages);
        }
      } catch (error) {
        console.log(error);
        setError("Error getting books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [page]);

  const getNextPage = () => {
    if (page == totalPages) return;
    setSearchParams({ page: String(page + 1) });
    window.scrollTo({ top: 0 });
  };

  const getPreviousPage = () => {
    if (page == 1) return;
    setSearchParams({ page: String(page - 1) });
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="app">
      <h1 className="product_header">
        Books to Scrape <span>We love being scraped!</span>
      </h1>
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        <Route
          path={`/books`}
          element={
            <BookList
              books={books}
              loading={loading}
              error={error}
              currentPage={page}
              totalPages={totalPages}
              getNextPage={getNextPage}
              getPrevPage={getPreviousPage}
            />
          }
        />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
};

export default App;
