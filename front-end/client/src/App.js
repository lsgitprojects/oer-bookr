import React, { Component } from 'react';
import './App.css';
import {
  Route
} from "react-router-dom";
import axios from 'axios'
import Books from './components/Books'
import BookForm from './components/BookForm'
import NavBar from './components/NavBar'
import BookView from './components/BookView'
import EditBook from './components/EditBook'
import SearchBarContainer from './components/SearchBarContainer';

const url = new URL('https://oer-bookr-api.herokuapp.com/')


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {

    const books = JSON.parse(localStorage.getItem('books')) || []
    this.setState({
      books: books,
      filteredBooks: books
    })

    axios
      .get(`${url}books`)
      .then(res => {
        console.log(res.data);
        this.setState({
          books: res.data
        })
      })
      .catch(err => console.log(err))
  }

  addBook = data => {
    axios
      .post(`${url}books`, data)
      .then(res => {
        console.log(res)
        return axios
          .get(`${url}books`)
          .then(res => {
            this.setState({
              books: res.data
            })
          })
      })
      .catch(err => console.log(err))
  }

  deleteBook = id => {
    axios
      .delete(`${url}books/${id}`)
      .then(res => {
        console.log(res);
        return axios
          .get(`${url}books`)
          .then(res => {
            this.setState({
              books: res.data
            })
          })
          .catch(err => console.log(err))
      })
  }

  searchBooks(query) {
    let books = this.state.books.filter((book) => {
      return book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query) || book.subject.toLowerCase().includes(query)
    });
    this.setState({
      books: books
    })
  }


  render() {

    return (
      <div className="App">
        <NavBar />
        <Route
          exact path='/'
          render={props => <SearchBarContainer searchBooks={this.searchBooks.bind(this)} {...props} />}
        />
        <Route
          exact path='/'
          render={props => <Books books={this.state.books} {...props} />}
        />
        <Route path='/books/:id'
          render={props => <BookView books={this.state.books} deleteBook={this.deleteBook} {...props} />}
        />
        <Route path='/create'
          render={props => <BookForm addBook={this.addBook} {...props} />}
        />
        <Route path='/books/:id'
          render={props => <EditBook notes={this.state.books} {...props} />}
        />
      </div>
    );
  }
}


export default App;
