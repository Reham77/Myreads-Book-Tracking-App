import React, {useEffect, useState} from 'react'
import * as BooksAPI from './Services/BooksAPI'
import {Route, BrowserRouter, Routes} from "react-router-dom";

import './App.css'
import Homepage from "./Pages/Homepage";
import BooksSearch from "./Pages/BooksSearch";

const App = () => {
    const [books, setBooks] = useState([]);

    const getAllBooks = () => {
        BooksAPI.getAll().then((books) => setBooks(books))
    }

    const onUpdateShelf = (book, shelf) => {
        book.shelf = shelf;
        BooksAPI.update(book, shelf).then(() => {
            setBooks([...books.filter((b) => b.id !== book.id), book]);
        });
    };

    useEffect(() => {
        getAllBooks();
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Homepage books={books} onUpdateShelf={onUpdateShelf}/>}/>
                <Route path='/search' element={<BooksSearch books={books} onUpdateShelf={onUpdateShelf}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App