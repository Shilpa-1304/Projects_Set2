import { useContext } from "react";
import { BooksContext } from "./LandingPage";

export default function BookList() {
  const { books, setBooks } = useContext(BooksContext);
  console.log(books);
  return (
    <div>
      <h4>List of Books</h4>
      <ol>
        {books.map((book, index) => {
          return (
            <li key={index}>
              {book.Name} by {book.Author} - {book.Price}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
