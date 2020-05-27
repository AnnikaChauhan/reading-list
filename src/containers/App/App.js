import React from 'react';
import styles from './App.module.scss';

import { CrudContextProvider } from '../../contexts/CrudContext';
import { SongListContextProvider } from '../../contexts/SongListContext';

import ReadingListContainer from '../ReadingListContainer';
import SongList from '../../components/SongList';

const App = () => {
  return (
    <main className={styles.app}>
      <h1>My Lists</h1>
      <CrudContextProvider>
        <ReadingListContainer />
      </CrudContextProvider>
      <SongListContextProvider>
        <SongList />
      </SongListContextProvider>
    </main>
  );
}

export default App;