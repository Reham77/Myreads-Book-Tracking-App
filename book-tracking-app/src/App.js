import React, {useEffect, useState} from 'react'
import * as BooksAPI from './Services/BooksAPI'
import {Route, BrowserRouter, Routes} from "react-router-dom";

import './App.css'
import Homepage from "./Pages/Homepage";
import BooksSearch from "./Pages/BooksSearch";

const App = () => {
    const [Books, setBooks] = useState([]);

    const getAllBooks = () => {
        BooksAPI.getAll().then((books) => setBooks(books))
    }
    const onUpdateShelf = (bookToBeUpdated, shelf) => {
        BooksAPI.update(bookToBeUpdated, shelf).then(() => {
            getAllBooks();
        })
    }
    useEffect(() => {
        getAllBooks();
    }, [onUpdateShelf])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Homepage Books={Books} onUpdateShelf={onUpdateShelf}/>}/>
                <Route path='/search' element={<BooksSearch onUpdateShelf={onUpdateShelf}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App