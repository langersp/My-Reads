import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {

	static propTypes = {
    	book: PropTypes.object.isRequired,
    	handleBookUpdate: PropTypes.func.isRequired
  	}

	handleChange = (event) => {
		this.props.handleBookUpdate(this.props.book, event.target.value);
	}

	render() {
		const { title, authors, imageLinks, shelf } = this.props.book;
		const { handleBookUpdate } = this.props; 
		let thumbnail;
		if(imageLinks) { thumbnail = imageLinks.thumbnail } 
		const bookCoverStyles = {
			width: 120,
			height: 180,
			backgroundImage: `url(${thumbnail})`
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