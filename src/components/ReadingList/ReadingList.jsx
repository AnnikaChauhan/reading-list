import React, { useContext } from 'react';

import ReadingListContext from '../../contexts/ReadingListContext';
import CrudContext from '../../contexts/CrudContext';

import Header from '../Utilities/Header';
import Book from '../Book';

const ReadingList = () => {
    const { books } = useContext(ReadingListContext);
    const { fsBooks } = useContext(CrudContext);

    console.log(fsBooks);

    return (
        <section>
            <Header
                hTwo={'My Books'}
                hThree={'Below are the books on my reading list...'}
            />
            {
                fsBooks 
                ? fsBooks.map((book, index) => { return <Book key={index} book={book} />})
                : <></>
            }
        </section>
    );
}

export default ReadingList;