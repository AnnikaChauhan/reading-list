import React from 'react';
import './App.module.scss';

import { ReadingListContextProvider } from '../../contexts/ReadingListContext';
import { CrudContextProvider } from '../../contexts/CrudContext';

import ReadingList from '../../components/ReadingList';
import BookShelf from '../../components/BookShelf';

const App = () => {
  return (
    <main>
      <h1>Reading List</h1>
      <CrudContextProvider>
        <ReadingListContextProvider>
          <ReadingList />
          <BookShelf />
        </ReadingListContextProvider>
      </CrudContextProvider>
    </main>
  );
}

export default App;