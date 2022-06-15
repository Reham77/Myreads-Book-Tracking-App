import PropTypes from "prop-types";
import React from "react";
import Book from "./Book";

const BookShelf = (props) => {

    BookShelf.propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }
    const {title, books, onUpdateShelf} = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            {books.length ? (
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.map((book) =>
                                <Book key={book.id} book={book} onUpdateShelf={onUpdateShelf}/>
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