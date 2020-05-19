import React, { useContext } from 'react';

import ReadingListContext from '../../contexts/ReadingListContext';

import Header from '../Utilities/Header';
import Book from '../Book';

const ReadingList = () => {
    const { books } = useContext(ReadingListContext);

    return (
        <section>
            <Header
                hTwo={'My Books'}
                hThree={'Below are the books on my reading list...'}
            />
            {
                books.length > 0
                ? books.map((book, index) => { return <Book key={index} book={book} />})
                : <p><em>There are currently no books on your reading list.</em></p>
            }
        </section>
    );
}

export default ReadingList;