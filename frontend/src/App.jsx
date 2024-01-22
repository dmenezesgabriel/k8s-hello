// src/App.jsx
import { useEffect, useState } from "react";

const App = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch(import.meta.env.VITE_API_URL);
    const data = await response.json();
    setBooks(data);
  };

  const addBook = async () => {
    await fetch(import.meta.env.API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, year: parseInt(year) }),
    });
    fetchBooks();
    // Clear the input fields after adding a book
    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <div>
      <h1>Book CRUD App</h1>

      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Year:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>

      <button onClick={addBook}>Add Book</button>

      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <strong>Title:</strong> {book.title}, <strong>Author:</strong>{" "}
            {book.author}, <strong>Year:</strong> {book.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
