import PropTypes from "prop-types";
import React from "react";
import Book from "./Book";

const BookShelf = (props) => {

    BookShelf.propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            {props.books.length ? (
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {props.books.map((book) =>
                                <Book key={book.id} book={book} onUpdateShelf={props.onUpdateShelf}/>
                            )}
                        </ol>
                    </div>
                ) :
                <p className='no-books'>No Books in this shelf! </p>
            }
        </div>
    )
}
export default BookShelf;