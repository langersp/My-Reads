import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {

  static propTypes = {
      book: PropTypes.array.isRequired,
      handleBookUpdate: PropTypes.func.isRequired
  }

	render() {

		const { shelf, books, handleBookUpdate } = this.props;

		return (
			<div className="bookshelf">
            	<h2 className="bookshelf-title">{ shelf }</h2>
              	<div className="bookshelf-books">
                   <ol className="books-grid">
                    {books.map((book, i) => { 
                        return (
                        <li key={i}>
                        	<Book book={book} handleBookUpdate={handleBookUpdate} />
                        </li>)
                     })}
                   </ol>
                </div>
            </div>
         )
	}
}

export default BookShelf;