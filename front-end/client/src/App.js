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

const url = new URL('https://oer-bookr-api.herokuapp.com/books')


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      reviews: []
    }
  }

  componentDidMount() {

    const books = JSON.parse(localStorage.getItem('books')) || []
    this.setState({
      books: books,
      filteredBooks: books
    })

    axios
      .get(`${url}get/all`)
      .then(res => {
        console.log(res.data);
        this.setState({
          notes: res.data
        })
      })
      .catch(err => console.log(err))
  }

  addBook = data => {
    axios
      .post(`${url}create`, data)
      .then(res => {
        console.log(res)
        return axios
          .get(`${url}get/all`)
          .then(res => {
            this.setState({
              notes: res.data
            })
          })
      })
      .catch(err => console.log(err))
  }

  deleteBook = id => {
    axios
      .delete(`${url}delete/${id}`)
      .then(res => {
        console.log(res);
        return axios
          .get(`${url}get/all`)
          .then(res => {
            this.setState({
              notes: res.data
            })
          })
          .catch(err => console.log(err))
      })
  }

  searchBooks(query) {
    let notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(query) || note.textBody.toLowerCase().includes(query)
    });
    this.setState({
      notes: notes
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
        <Route path='/edit/:id'
          render={props => <EditBook notes={this.state.books} {...props} />}
        />
      </div>
    );
  }
}


export default App;
