import React from 'react';
import styled from 'styled-components';

const BookContainer = styled.div`
color: black;
text-decoration: none;
text-align: left;
padding-left: 10px;
h3 {
    border-bottom: 2px solid #D5D5D5;
    width: 200px;
    padding-bottom: 5px;
}
p {
    height: 131px;
    overflow: hidden;
}
`

const Book = props => {
    return (
        <BookContainer>
            <h3>{props.title}</h3>
            <p>{props.author}</p>
            {/* <p>{props.publisher}</p>
            <p>{props.license}</p>
            <p>{props.subject}</p>
            <p>{props.image}</p>
            <p>{props.link}</p> */}
        </BookContainer>
    );
};

Book.defaultProps = {
    title: '',
    author: '',
    publisher: '',
    license: '',
    subject: '',
    image: '',
    link: ''
};

export default Book;