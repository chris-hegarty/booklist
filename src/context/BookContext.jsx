import React, { useState, createContext } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext(null);

const BookContextProvider = (props) => {
	const [books, setBooks] = useState([
		{ title: "Book One", author: "Author One" },
		{ title: "Book Two", author: "Author Two" },
		{ title: "Book Three", author: "Author Three" },
	]);
	const addBook = (title, author) => {
		setBooks([...books, { title, author, id: uuid() }]);
	};
	// If the book ID is NOT equal to the id we pass in, it stays in the new array.
	const removeBook = (id) => {
		setBooks(books.filter((book) => book.id !== id));
	};
};

return (
	<BookContext.Provider value={{ books, addBook, removeBook }}>
		{props.children}
	</BookContext.Provider>
);

export default BookContextProvider;
