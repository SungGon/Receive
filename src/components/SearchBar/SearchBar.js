import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    render(){
        return(
            <div className="searchBar">
                <h2 className="mainlogo">RECEIVE</h2>
                <input placeholder="상품명을 입력하세요." />
                <button onClick={"search"}>검색</button>
            </div>
        )
    };
};

export default SearchBar;