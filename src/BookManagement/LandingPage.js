import react, { useState, createContext } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import AddBook from "./AddBook";
import BookList from "./BookList";
export const BooksContext = createContext();
export default function LandingPage() {
  const [books, setBooks] = useState([
    { Name: "Let's Win the Show", Author: "Shilpa Keswani", Price: "2000" },
    { Name: "Let's Win the Match", Author: "Deepika Keswani", Price: "6000" }
  ]);
  console.log(books);
  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      <react.Fragment>
        <h3>BOOK MANAGEMENT SYSTEM</h3>
        <ul type="none">
          <li>
            <NavLink to="/addbook">Add Book</NavLink>
          </li>
          <li>
            <NavLink to="/showbooks">Show Books</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/showbooks" element={<BookList />} />
        </Routes>
      </react.Fragment>
    </BooksContext.Provider>
  );
}
