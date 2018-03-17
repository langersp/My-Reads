import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import Book from './Book';

class ListBooks extends Component {

	static propTypes = {
    	handleBookUpdate: PropTypes.func.isRequired
  	}

	render() {

		const { title, books, bookShelves, handleBookUpdate } = this.props;	

		return (
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>{title}</h1>
	            </div>

	            <div className="list-books-content">
	              <div>
	                {bookShelves ? (
		                bookShelves.map((bookShelf, i) => {
		                  const filteredBooks = books.filter(book => book.shelf === bookShelf.id);
		                  return <BookShelf key={bookShelf.id} shelf={bookShelf.title} books={filteredBooks} handleBookUpdate={handleBookUpdate} />;
		                })
                    ) : (
	                    <ol className="books-grid">
		                   {
			                    books.map((book, i) => { 
			                        return (
			                        <li key={i}>
			                        	<Book book={book} handleBookUpdate={handleBookUpdate} />
			                        </li>)
			                    }) 
		               		}
		                </ol>
	                )}                 
	              </div>
	            </div>

	            <div className="open-search">
	              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
	            </div>
	        </div>
	    )
	}
}

export default ListBooks;