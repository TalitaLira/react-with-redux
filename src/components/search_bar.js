import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />;
// }

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar col-md-8">
                <input 
                    value={this.state.term}
                    onChange={event => console.log(event.target.value)} 
                />
            </div>
        );
    }


}

export default SearchBar;