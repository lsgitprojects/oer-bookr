import React, { Component } from 'react';
import styled from 'styled-components';

const StyledBookForm = styled.div`
display: flex;
flex-direction: column;
width: 700px;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-left: 240px;
h2 {
    margin-right: 400px;
}
form {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
}
input {
    box-sizing: border-box;
    margin-bottom: 5px;
    border: 2px solid #C9C9C9;
    padding: 5px;
    :first-child {
        height: 50px;
        padding-left: 10px;
    }
    :nth-child(2) {
        height: 500px;
        width: 1000px;
        text-align: top;
        padding-bottom: 440px;
        padding-left: 10px;
    }
}
button {
    width: 210px;
    height: 50px;
    background-color: #433A30;
    color: #F9FCFC;
    border: 2px solid #C9C9C9;
}
`

class BookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            publisher: '',
            license: '',
            subject: '',
            image: '',
            link: ''
        };
    }

    submitChange = e => {
        e.preventDefault();
        this.props.addBook(this.state);
        this.props.history.push("/");
        // window.location.reload();
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <StyledBookForm>
                <h2>Create New Book:</h2>
                <form onSubmit={this.submitChange}>
                    <input
                        onChange={this.handleInputChange}
                        placeholder="Title"
                        value={this.state.title}
                        name="title"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="Author"
                        value={this.state.textBody}
                        name="textBody"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="Publisher"
                        value={this.state.textBody}
                        name="textBody"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="License"
                        value={this.state.textBody}
                        name="textBody"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="Subject"
                        value={this.state.textBody}
                        name="textBody"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="Image"
                        value={this.state.textBody}
                        name="textBody"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="Link"
                        value={this.state.textBody}
                        name="textBody"
                    />
                    <button type="submit">Save</button>
                </form>
            </StyledBookForm>
        );
    }
}

export default BookForm;