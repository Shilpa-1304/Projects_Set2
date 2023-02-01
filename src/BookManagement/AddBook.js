import { BooksContext } from "./LandingPage";
import { useContext, useState } from "react";
export default function AddBook() {
  const { books, setBooks } = useContext(BooksContext);
  const [item, setItem] = useState({});
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setItem({ ...item, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let arr = [...books];
    arr.push(item);
    setBooks([...arr]);
  };
  return (
    <div>
      <h4>Add Book</h4>
      <form>
        <div>
          <label>Book Name: </label>
          <input
            name="Name"
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Enter book name..."
          />
        </div>
        <div>
          <label>Author Name: </label>
          <input
            name="Author"
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Enter book name..."
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            name="Price"
            type="number"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Enter book name..."
          />
        </div>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Add
        </button>
      </form>
    </div>
  );
}
