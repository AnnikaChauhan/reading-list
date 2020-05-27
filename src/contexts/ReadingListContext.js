import React, { createContext, useState } from 'react';

const ReadingListContext = createContext();

export const ReadingListContextProvider = (props) => {
    const [books, setBooks] = useState([]);

    const addBook = (addedBook) => {
        setBooks([...books, addedBook]);
    }

    const removeBook = (deleteBook) => {
        setBooks(books.filter(book => {
            return book.title !== deleteBook.title;
        }));
    }

    return (
        <ReadingListContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </ReadingListContext.Provider>
    );
}

export default ReadingListContext;