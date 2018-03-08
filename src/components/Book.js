import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import * as BooksAPI from '../BooksAPI';

class Book extends Component {

	state = {}

	onChangeHandler = (event) => {
		console.log("clicked", event.target.value);

		const shelf = event.target.value;
		BooksAPI.update(this.props.book, shelf).then(book => console.log("updated"));
	}

	render() {
		const { title, authors, imageLinks, shelf } = this.props.book;
		const bookCoverStyles = {
			width: 120,
			height: 180,
			backgroundImage: `url(${imageLinks.thumbnail})`
		}

		return (
			<div className="book">
	            <div className="book-top">
	                <div className="book-cover" style={ bookCoverStyles }></div>
	                <BookShelfChanger shelf={shelf} onChangeHandler={this.onChangeHandler} />
	             </div>
	            <div className="book-title">{title}</div>
	            <div className="book-authors">{authors}</div>
	        </div>
	    )
	}
}

export default Book;