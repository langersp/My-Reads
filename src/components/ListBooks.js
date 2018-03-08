import React, { Component } from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from '../BooksAPI';

class ListBooks extends Component {

	state = {}

	onChangeHandler = (event) => {
		const shelf = event.target.value;
		BooksAPI.update(this.props.book, shelf).then(book => console.log("updated"));
	}

	render() {
		const { title, books, bookShelves } = this.props;	

		return (
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>{title}</h1>
	            </div>

	            <div className="list-books-content">
	              <div>
	                {bookShelves.map((bookShelf, i) => {
	                  const filteredBooks = books.filter(book => book.shelf === bookShelf.id);
	                  return <BookShelf key={bookShelf.id} shelf={bookShelf.title} books={filteredBooks} />;
	                })}                 
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