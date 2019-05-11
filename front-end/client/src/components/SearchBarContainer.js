import React from "react";
import styled from 'styled-components';

const StyledSearchContainer = styled.div`
input {
    border: 2px solid #C9C9C9;
    margin-left: 80px;
    width: 300px;
    height: 50px;
    padding-left: 10px;
}
`

class SearchBarContainer extends React.Component {

    handleSearch(event) {
        this.props.searchBooks(event.target.value)
    }

    render() {
        return (
            <StyledSearchContainer>
                <div>
                    <input type="text" placeholder="Search" onKeyUp={this.handleSearch.bind(this)} />
                </div>
            </StyledSearchContainer>
        );
    }
}

export default SearchBarContainer;