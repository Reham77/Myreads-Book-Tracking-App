import React from "react";
import PropTypes from "prop-types";

const BookShelfChanger = (props) => {
    BookShelfChanger.propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }
    const {book, onUpdateShelf} = props;
    return (
        <div className="book-shelf-changer">
            <select
                value={book.shelf || 'none'}
                onChange={(event) => onUpdateShelf(book, event.target.value)}
            >

                <option value="move" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">
                    Want to Read
                </option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}
export default BookShelfChanger