import React from 'react';

import { ReadingListContextProvider } from '../../contexts/ReadingListContext';

import ReadingList from '../../components/ReadingList';
import BookShelf from '../../components/BookShelf';

const ReadingListContainer = () => {
    return (
        <section>
            <ReadingListContextProvider>
                <ReadingList />
                <BookShelf />
            </ReadingListContextProvider>
        </section>
    );
}

export default ReadingListContainer;