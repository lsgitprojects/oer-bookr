// import React, { Component } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

// const StyledEditForm = styled.div`
// display: flex;
// flex-direction: column;
// width: 700px;
// display: flex;
// flex-wrap: wrap;
// justify-content: center;
// margin-left: 240px;
// h2 {
//     margin-right: 400px;
// }
// form {
//     margin-left: 50px;
//     display: flex;
//     flex-direction: column;
// }
// input {
//     box-sizing: border-box;
//     margin-bottom: 5px;
//     border: 2px solid #C9C9C9;
//     padding: 5px;
//     :first-child {
//         height: 50px;
//         padding-left: 10px;
//     }
//     :nth-child(2) {
//         height: 500px;
//         width: 1000px;
//         text-align: top;
//         padding-bottom: 440px;
//         padding-left: 10px;
//     }
// }
// button {
//     width: 210px;
//     height: 50px;
//     background-color: #433A30;
//     color: #F9FCFC;
//     border: 2px solid #C9C9C9;
// }
// `

// class EditBook extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '',
//             author: '',
//             publisher: '',
//             license: '',
//             subject: '',
//             image: '',
//             link: ''
//         };
//     }

//     componentDidMount() {
//         this.props.books.filter(book => {
//             console.log('test1')
//             if (this.props.match.params.id === book.id) {
//                 console.log('test2')
//                 return this.setState({
//                     title: book.title,
//                     author: book.title,
//                     publisher: book.publisher,
//                     license: book.license,
//                     subject: book.subject,
//                     image: book.image,
//                     link: book.link
//                 })
//             } else {
//                 return 'error'
//             }
//         })
//     }


//     submitChange = e => {
//         e.preventDefault();
//         const id = this.props.match.params.id
//         const book = {
//             title: this.state.title,
//             author: this.state.author,
//             publisher: this.state.publisher,
//             license: this.state.license,
//             subject: this.state.subject,
//             image: this.state.image,
//             link: this.state.link
//         }
//         axios
//             .put(`https://oer-bookr-api.herokuapp.com/books/${id}`, book)
//             .then(res => {
//                 console.log(res)
//                 this.setState({
//                     title: '',
//                     author: '',
//                     publisher: '',
//                     license: '',
//                     subject: '',
//                     image: '',
//                     link: ''
//                 })
//                 window.location.reload();
//             })
//         this.props.history.push("/");
//     }

//     handleInputChange = e => {
//         this.setState({ [e.target.name]: e.target.value });
//     };

//     render() {
//         return (
//             <StyledEditForm>
//                 <h2>Edit Book:</h2>
//                 <form onSubmit={this.submitChange}>
//                     <input
//                         onChange={this.handleInputChange}
//                         placeholder="Book Title"
//                         value={this.state.title}
//                         name="title"
//                     />
//                     <input
//                         onChange={this.handleInputChange}
//                         placeholder="Book Author"
//                         value={this.state.author}
//                         name="author"
//                     />
//                     <input
//                         onChange={this.handleInputChange}
//                         placeholder="Book Publisher"
//                         value={this.state.publisher}
//                         name="publisher"
//                     />
//                     <input
//                         onChange={this.handleInputChange}
//                         placeholder="Book License"
//                         value={this.state.license}
//                         name="license"
//                     />
//                     <input
//                         onChange={this.handleInputChange}
//                         placeholder="Book Subject"
//                         value={this.state.subject}
//                         name="subject"
//                     />
//                     <input
//                         onChange={this.handleInputChange}
//                         placeholder="Book Image"
//                         value={this.state.image}
//                         name="image"
//                     />
//                     <input
//                         onChange={this.handleInputChange}
//                         placeholder="Book Link"
//                         value={this.state.link}
//                         name="link"
//                     />
//                     <button type="submit">Update</button>
//                 </form>
//             </StyledEditForm>
//         );
//     }
// }

// export default EditBook;