import React, { useContext, useState } from 'react';

import SongListContext from '../../contexts/SongListContext';

const SongList = () => { 
    const { songs } = useContext(SongListContext);

    const [song, setSong] = useState({ title: '', author: ''});

    console.log(song);

    return (
        <div>
            <h2>Song List</h2>
            {
                songs.map((song, index) => {
                    return (
                        <div key={index}>
                            <h4>{song.title}</h4>
                            <p>{song.artist}</p>
                        </div>
                    );
                })
            }
            <div>
                <h3>Add A New Song To The List</h3>
                <input type="text" name="" id=""/>
            </div>
        </div>
    );
}

export default SongList;