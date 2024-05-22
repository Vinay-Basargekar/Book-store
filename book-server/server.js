const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");

app.use(cors());

const books = [
	{
		id: 1,
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		noOfPages: 281,
	},
	{ id: 2, title: "1984", author: "George Orwell", noOfPages: "328" },
	{
		id: 3,
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		noOfPages: 180,
	},
	{
		id: 4,
		title: "The Catcher in the Rye",
		author: "J.D. Salinger",
		noOfPages: 224,
	},
	{ id: 5, title: "Animal Farm", author: "George Orwell", noOfPages: 112 },
	{
		id: 6,
		title: "The Lord of the Rings",
		author: "J.R.R. Tolkien",
		noOfPages: 1178,
	},
	{
		id: 7,
		title: "Pride and Prejudice",
		author: "Jane Austen",
		noOfPages: 279,
	},
	{ id: 8, title: "The Hobbit", author: "J.R.R. Tolkien", noOfPages: 310 },
	{
		id: 9,
		title: "Harry Potter and the Philosopher's Stone",
		author: "J.K. Rowling",
		noOfPages: 332,
	},
	{ id: 10, title: "The Da Vinci Code", author: "Dan Brown", noOfPages: 689 },
];


// GET endpoint to retrieve the list of books
app.get("/books", (req, res) => {
	res.json(books);
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
