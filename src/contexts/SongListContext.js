import React, { createContext, useState } from 'react';

const SongListContext = createContext();

export const SongListContextProvider = (props) => {
    const [songs, setSongs] = useState([
        { title: 'Telephone', artist: 'Lady Gaga' },
        { title: 'Maps', artist: 'Maroon 5' }
    ]);

    // const addSong = (newSong) => {
    //     setSongs([...songs, newSong]);
    // };

    return (
        <SongListContext.Provider value={{ songs }}>
            {props.children}
        </SongListContext.Provider>
    );
}

export default SongListContext;