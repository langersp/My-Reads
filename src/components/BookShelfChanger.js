import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {

	static propTypes = {
    	handleChange: PropTypes.func.isRequired
  	}

	render() {

		const { handleChange } = this.props;
		const { shelf } = this.props || this.props.book;

		return(
			<div className="book-shelf-changer">
	            <select defaultValue={shelf === undefined ? 'none' : shelf} onChange={handleChange}>
		            <option value="none" disabled>Move to...</option>
		            <option value="currentlyReading">Currently Reading</option>
		            <option value="wantToRead">Want to Read</option>
		            <option value="read">Read</option>
		            <option value="none">None</option>
	            </select>
            </div>
		)
	}
}

export default BookShelfChanger;