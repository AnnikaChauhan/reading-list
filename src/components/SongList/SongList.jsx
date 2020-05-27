import React, { useContext, useState } from 'react';

import SongListContext from '../../contexts/SongListContext';

const SongList = () => { 
    const { songs, addSong } = useContext(SongListContext);

    const [songToAdd, setSongToAdd] = useState({ title: '', artist: ''});

    const handleInputChange = (e) => {
        setSongToAdd({
            ...songToAdd,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = () => {
        addSong(songToAdd);
    }

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
                <input type="text" name="title" id="title" value={songToAdd.title} onChange={handleInputChange} placeholder='Song Title'/>
                <input type="text" name="artist" id="artist" value={songToAdd.artist} onChange={handleInputChange} placeholder='Song Artist'/>
                <button onClick={handleClick}>Add</button>
                
            </div>
        </div>
    );
}

export default SongList;