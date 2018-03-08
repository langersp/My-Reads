import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {

	componentDidMount() {

	}

	render() {

		const { shelf, books } = this.props;

		return (
			<div className="bookshelf">
            	<h2 className="bookshelf-title">{ shelf }</h2>
              	<div className="bookshelf-books">
                   <ol className="books-grid">
                    {books.map((book, i) => { 
                        return (
                        <li key={i}>
                        	<Book book={book} />
                        </li>)
                     })}
                   </ol>
                </div>
            </div>
         )
	}
}

export default BookShelf;