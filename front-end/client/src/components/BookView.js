import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BookViewContainer = styled.div`
width: 1380px;
height: 500px;
margin: 0 auto;
`

const BookViewButtons = styled.div`
text-decoration: underline;
text-align: right;
display: flex;
p {
    cursor: pointer;
    color: black;
}
p:first-child {
    padding-right: 20px;
    margin-left: 1500px;
}
`

const BookViewContent = styled.div`
text-align: left;
margin-right: 500px;
p {
    width: 1500px;
}
`

const ModalContainer = styled.div`
    border: 1px solid #C9C9C9;
    width: 600px;
    height: 200px;
    margin-left: 500px;
    background-color: white;
    margin-top: 220px;
    margin-left: 700px;
    p {
        font-size: 20px;
        margin-top: 40px;
    }
    button {
        margin-top: 30px;
        width: 200px;
        height: 50px;
        color: white;
        font-size: 16px;
    }
    
button:nth-child(2) {
    background-color: #CA001A;
    margin-right: 20px;
}
button:nth-child(3) {
    background-color: #24B8BD;
}
`

class BookView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    handleDelete = e => {
        e.preventDefault()
        this.props.deleteBook(this.props.match.params.id)
        this.props.history.push("/");
    }

    render() {
        const menuModal = this.state.isOpen ? 'show' : 'hide';

        return (
            <div>
                {this.props.books.map(book => {
                    if (this.props.match.params.id === book._id) {
                        return (
                            <BookViewContainer key={book._id}>
                                <BookViewButtons>
                                    <Link to={`/edit/${book._id}`}>
                                        <p>edit</p>
                                    </Link>
                                    <p onClick={this.toggleModal}>delete</p>
                                </BookViewButtons>
                                <BookViewContent>
                                    <h2>{book.title}</h2>
                                    <p>{book.author}</p>
                                    <p>{book.publisher}</p>
                                    <p>{book.license}</p>
                                    <p>{book.subject}</p>
                                    <p>{book.image}</p>
                                    <p>{book.link}</p>
                                </BookViewContent>
                                <div className={`menu ${menuModal} backdrop`}>
                                    <ModalContainer>
                                        <p>Are you sure you want to delete this?</p>
                                        <button onClick={this.handleDelete}>Delete</button>
                                        <button onClick={this.toggleModal}>No</button>
                                    </ModalContainer>
                                </div>
                            </BookViewContainer>
                        )
                    }
                })}
            </div>
        )
    }
}

export default BookView;