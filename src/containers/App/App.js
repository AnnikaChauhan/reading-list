import React from 'react';
import './App.module.scss';

import { ReadingListContextProvider } from '../../contexts/ReadingListContext';

import ReadingList from '../../components/ReadingList';

const App = () => {
  return(
    <main>
      <h1>Reading List</h1>
      <ReadingListContextProvider>
        <ReadingList />
      </ReadingListContextProvider>
    </main>
  );
}

export default App;
