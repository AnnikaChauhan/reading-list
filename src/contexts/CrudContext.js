import React, { createContext, useState, useEffect } from 'react';

import { firestore } from '../firebase';

const CrudContext = createContext();

export const CrudContextProvider = (props) => {
    const [fsBooks, setFsBooks] = useState([]);

    const fetchFirestoreBooks = () => {
        firestore
            .collection("books")
            .get()
            .then((result) => {
                const fsBooks = result.docs.map(doc => doc.data());
                setFsBooks({ fsBooks });
            })
    }

    useEffect(fetchFirestoreBooks, []);

    return (
        <CrudContext.Provider value={fsBooks}>
            {props.children}
        </CrudContext.Provider>
    );
}

export default CrudContext;