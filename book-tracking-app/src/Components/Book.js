import React from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

const Book = (props) => {
    Book.propeTypes = {
        book: PropTypes.object.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }
    return (

        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: props.book.imageLinks && `url(${props.book.imageLinks.thumbnail})`
                }}/>
                <BookShelfChanger book={props.book} onUpdateShelf={props.onUpdateShelf}/>
            </div>
            <div className="book-title">{props.book && props.book.title}</div>
            <div className="book-authors">
                {props.book.authors && props.book.authors.map((author, key) => {
                    return <div key={key}>{author}</div>
                })}
            </div>
        </div>
    )
}
export default Book;