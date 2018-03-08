import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import * as BooksAPI from '../BooksAPI';

class Book extends Component {

	state = {}

	handleChange = (event) => {
		this.props.handleBookUpdate(this.props.book, event.target.value);
	}

	render() {
		const { id, title, authors, imageLinks, shelf } = this.props.book;
		const { handleBookUpdate } = this.props; 
		const bookCoverStyles = {
			width: 120,
			height: 180,
			backgroundImage: `url(${imageLinks.thumbnail})`
		}

		return (
			<div className="book">
	            <div className="book-top">
	                <div className="book-cover" style={ bookCoverStyles }></div>
	                <BookShelfChanger shelf={shelf} handleChange={this.handleChange} />
	             </div>
	            <div className="book-title">{title}</div>
	            <div className="book-authors">{authors}</div>
	        </div>
	    )
	}
}

export default Book;