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
                books.map((book, index) => {
                    return <Book key={index} book={book} />
                } )
            }
        </section>
    );
}

export default ReadingList;