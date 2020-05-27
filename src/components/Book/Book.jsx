import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styles from './Book.module.scss';

import ReadingListContext from '../../contexts/ReadingListContext';

const Book = ({ book }) => {
    const { books, addBook, removeBook } = useContext(ReadingListContext);

    const renderButton = books.includes(book) ? <button onClick={() => { removeBook(book) }}>Remove from Reading List</button> : <button onClick={() => { addBook(book) }}>Add to Reading List</button>;
    
    return (
        <div className={styles.book}>
            <div>
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                {renderButton}
            </div>
            <img src={book.picture} alt={book.title} />

        </div>
    );
};

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string
};

Book.defaultProps = {
    title: "Pass props down for title",
    author: "Pass props down for author"
};

export default Book;