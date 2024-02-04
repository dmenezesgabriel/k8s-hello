const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Use environment variable for the MongoDB URI
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
});

const Book = mongoose.model("Book", bookSchema);

app.on("listening", function () {
  console.log("Up and running 🚀");
});

// Create a new book
app.post("/books", async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.json(newBook);
});

// Get all books
app.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Get a specific book
app.get("/books/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
});

// Update a book
app.put("/books/:id", async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedBook);
});

// Delete a book
app.delete("/books/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
