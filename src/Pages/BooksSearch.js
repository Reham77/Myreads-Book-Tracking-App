import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as BooksAPI from '../Services/BooksAPI'
import Book from "../Components/Book";
import PropTypes from "prop-types";
import {DebounceInput} from 'react-debounce-input'


const BooksSearch = (props) => {

    BooksSearch.propTypes = {
        onUpdateShelf: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired
    }
    const {books, onUpdateShelf} = props;

    const [query, setQuery] = useState("");
    const [bookSearchResult, setBookSearchResult] = useState([]);


    const searchForQuery = (event) => {
        setQuery(event.target.value);

        if (event.target.value.trim() === "") {
            setBookSearchResult([]);
            return;
        }

        BooksAPI.search(event.target.value.trim()).then((searchResult) => {
            if (searchResult.error) {
                setBookSearchResult([]);
            } else {
                setBookSearchResult(adjustShelves(searchResult));
            }
        }).catch(() => setBookSearchResult([]));
    }

    const adjustShelves = (searchResult) => {
        return searchResult.map(result => {
            result.shelf = 'none';
            books.forEach(book => {
                if (result.id === book.id) {
                    result.shelf = book.shelf;
                }
            })
            return result;
        });
    }


    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/'>
                    <div className="close-search"/>
                </Link>

                <div className="search-books-input-wrapper">
                    <DebounceInput
                        debounceTimeout={300}
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
                        {bookSearchResult && bookSearchResult.length > 0 &&
                        bookSearchResult.map((book) => <Book key={book.id} book={book}
                                                             onUpdateShelf={onUpdateShelf}/>)}
                    </ol>
                </div>
            </div>
        </div>
    )
}
export default BooksSearch