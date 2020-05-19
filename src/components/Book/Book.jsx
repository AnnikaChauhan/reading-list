import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
    return (
        <div>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
        </div>
    );
};

Book.propTypes = {
    title: PropTypes.string
};

Book.defaultProps = {
    title: "Pass props down for title"
};

export default Book;