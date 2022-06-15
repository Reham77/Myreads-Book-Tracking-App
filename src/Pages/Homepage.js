import React from "react";
import BookShelf from "../Components/BookShelf";
import PropTypes from "prop-types";
import Loading from "../Components/Loading";
import {Link} from "react-router-dom";

const Homepage = (props) => {
    Homepage.propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }
    const {books, onUpdateShelf} = props;

    return (
        <div className="app">
            <div className="list-books-title">
                <h1>MyReads-A Book Tracking App</h1>
            </div>
            {books.length ? (
                    <>
                        <BookShelf
                            title="Currently Reading"
                            books={books.filter((book) => book.shelf === 'currentlyReading')}
                            onUpdateShelf={onUpdateShelf}
                        />
                        <BookShelf
                            title="Want to Read"
                            books={books.filter((book) => book.shelf === 'wantToRead')}
                            onUpdateShelf={onUpdateShelf}
                        />
                        <BookShelf
                            title="Read"
                            books={books.filter((book) => book.shelf === 'read')}
                            onUpdateShelf={onUpdateShelf}
                        />
                        <Link to='/search'>
                            <div className="open-search"/>
                        </Link>
                    </>
                ) :
                <Loading/>
            }
        </div>
    )
}
export default Homepage;