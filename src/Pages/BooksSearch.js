import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as BooksAPI from '../Services/BooksAPI'
import Book from "../Components/Book";
import PropTypes from "prop-types";

const BooksSearch = (props) => {

    BooksSearch.propTypes = {
        onUpdateShelf: PropTypes.func.isRequired
    }
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);

    const searchForQuery = (event) => {
        setQuery(event.target.value);

        if (query.trim() === "") {
            setBooks([]);
            return;
        }

        BooksAPI.search(query.trim()).then((searchResult) => {
            if (searchResult.error) {
                setBooks([]);
            } else setBooks(searchResult)
        }).catch(() => setBooks([]));
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/'>
                    <div className="close-search"/>
                </Link>

                <div className="search-books-input-wrapper">
                    <input
                        onChange={searchForQuery}
                        value={query}
                        type="text"
                        placeholder="Search by title or author"
                    />
                </div>
            </div>
            <div style={{marginTop: '100px',}}>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books && books.length > 0 &&
                        books.map((book) => <Book key={book.id} book={book} onUpdateShelf={props.onUpdateShelf}/>)}
                    </ol>
                </div>
            </div>
        </div>
    )
}
export default BooksSearch