import { Link, useParams } from "react-router-dom";

const Breadcrumb = ({
  path,
  category,
  bookId,
}: {
  path?: string;
  category?: string;
  bookId?: string;
}) => {
  const { id } = useParams();
  const active = !!id;
  return (
    <ul className="breadcrumb">
      <li>
        <Link className={`${active ? "in_details" : ""}`} to="/books">
          All products
        </Link>
      </li>
      {path && category && (
        <>
          <li>{category}</li>
          <li>
            <Link className="active" to={`/books/${bookId}`}>
              {path}
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Breadcrumb;
