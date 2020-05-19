import React, { createContext, useState } from 'react';

const ReadingListContext = createContext();

export const ReadingListContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'War and Peace', author: 'Leo Tolstoy' },
        { title: 'Prisoners of Geography', author: 'Tim Marshall' },
        { title: 'Sapiens', author: 'Yuval Noah Harari' }
    ]);

    const addBook = (book) => {
        setBooks([...books, book]);
    }

    const removeBook = (deleteBook) => {
        books.filter(book => {
            return book.title !== deleteBook.title;
        })
    }

    return (
        <ReadingListContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </ReadingListContext.Provider>
    );
}

export default ReadingListContext;