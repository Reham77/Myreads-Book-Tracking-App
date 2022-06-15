import React from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

const Book = (props) => {
    Book.propeTypes = {
        book: PropTypes.object.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }
    const {book, onUpdateShelf} = props;

    return (

        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: book.imageLinks && `url(${book.imageLinks.thumbnail})`
                }}/>

                <BookShelfChanger book={book} onUpdateShelf={onUpdateShelf}/>
            </div>
            <div className="book-title">{book && book.title}</div>
            <div className="book-authors">
                {book.authors && book.authors.map((author, key) => {
                    return <div key={key}>{author}</div>
                })}
            </div>
        </div>
    )
}
export default Book;