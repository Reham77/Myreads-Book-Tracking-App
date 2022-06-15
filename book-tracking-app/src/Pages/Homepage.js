import React from "react";
import BookShelf from "../Components/BookShelf";
import PropTypes from "prop-types";
import Loading from "../Components/Loading";
import {Link} from "react-router-dom";

const Homepage = (props) => {
    Homepage.propTypes = {
        Books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }
    return (
        <div className="app">
            <div className="list-books-title">
                <h1>MyReads-A Book Tracking App</h1>
            </div>
            {props.Books.length ? (
                    <>
                        <BookShelf
                            title="Currently Reading"
                            books={props.Books.filter((book) => book.shelf === 'currentlyReading')}
                            onUpdateShelf={props.onUpdateShelf}
                        />
                        <BookShelf
                            title="Want to Read"
                            books={props.Books.filter((book) => book.shelf === 'wantToRead')}
                            onUpdateShelf={props.onUpdateShelf}
                        />
                        <BookShelf
                            title="Read"
                            books={props.Books.filter((book) => book.shelf === 'read')}
                            onUpdateShelf={props.onUpdateShelf}
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