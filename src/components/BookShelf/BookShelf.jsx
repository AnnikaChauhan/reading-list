import React, { useContext } from 'react';

import CrudContext from '../../contexts/CrudContext';

import Header from '../Utilities/Header';
import Book from '../Book';

const BookShelf = () => {
    const { fsBooks } = useContext(CrudContext);

    return (
        <div>
            <Header
                hTwo={'Book Shelf'}
                hThree={'Below are the books available to read...'}
            />
            {
                fsBooks
                    ? fsBooks.map((book, index) => { return <Book key={index} book={book} /> })
                    : <></>
            }
        </div>
    );
}

export default BookShelf;