import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
    return (
        <div>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <button>Add to my Reading List</button>
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