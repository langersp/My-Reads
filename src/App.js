import React from 'react';
import ListBooks from './components/ListBooks';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import { Debounce } from 'react-throttle';
// import * as BooksAPI from './BooksAPI'

import './App.css'


class BooksApp extends React.Component {

   state = {
    bookShelves: [
      {id: 'currentlyReading', title: 'Currently Reading'}, 
      {id: 'wantToRead', title: 'Want to Read'}, 
      {id: 'read', title: 'Read'}
    ],
    books: [],
    searchResults: [],
    searchError: ''
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.getAllBooks());
  }

  handleSearchChange = (e) => {
    if(e.target.value != '') {
      BooksAPI.search(e.target.value).then((searchResults) => {
        console.log(searchResults)
        if(!searchResults.error) { 
          searchResults.forEach((book, i) => {
            this.state.books.forEach((sbook) => {
              if(sbook.id === book.id) { searchResults[i].shelf = sbook.shelf }
            })
          })     
          this.setState({ searchResults });
          this.setState({ searchError: ''});
        } else {
          this.setState({ searchResults: [] });
          this.setState({ searchError: searchResults.error});
        }
      })
    } else {
      this.setState({ searchResults: [] });
    }
  }

  render() {

    const { books, bookShelves, searchResults, searchError } = this.state;
  
    return (
      <div className="app">

          <Route path="/search" render={({history}) => (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to={{
                pathname: '/'
              }} className='close-search'>Close</Link>
              <div className="search-books-input-wrapper">        
                <Debounce time="300" handler="onChange">
                    <input type="text" autoFocus placeholder="Search by title or author" onChange={this.handleSearchChange} />
                </Debounce>
              </div>
            </div>
            <div className="search-books-results">
              {searchResults.length > 0 && (
                <ListBooks books={searchResults} handleBookUpdate={this.updateBook} title="Search Results" />
              )}
              {searchError !=='' && (
                <div>
                  <p>Sorry, your search returned no results, please try again.</p>
                  <p>Error Code: searchError</p>
                </div>
              )}
             
            </div>

          </div>
          )} />

          <Route exact path="/" render={() => (      
            <div>
              <ListBooks books={books} bookShelves={bookShelves} handleBookUpdate={this.updateBook} title="My Books" />              
              <div className="open-search">
                <Link to={{
                pathname: '/search'
                }} className='open-search' onClick={() => this.setState({ searchResults: []})}>Search</Link>
              </div>
            </div>        
          )} />   
       
      </div>
    )
  }
}

export default BooksApp;
