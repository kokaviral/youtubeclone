import React from 'react';
import './searchbar.css'

class Searchbar extends React.Component {
    state = { searchterm: '' }

    onInputChange = (event) => {
        this.setState({ searchterm: event.target.value });
    }
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.termExtraction(this.state.searchterm)
    }
    render() {
        return (

            <div className="ui segment searchbar" >
                <form className="ui form" onSubmit={this.onFormSubmit} >
                    <div className="field" style={{ display: "flex", justifyContent: "between", borderRadius: "0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png" style={{ width: "35px" }} />
                            <p id="para">YouTube</p>
                        </div>
                        <input
                            type="text"
                            placeholder="Search a video"
                            value={this.state.searchterm}
                            onChange={this.onInputChange}
                            style={{ width: "50%", borderRadius: "0", fontFamily: "font-family: 'Roboto', sans-serif;", marginLeft: "17%" }}
                        />
                        <button className="ui icon button" style={{ borderRadius: "0" }} onClick={this.onFormSubmit}>
                            <i className="search icon" style={{ borderRadius: "0", paddingLeft: "10px", paddingRight: "25px" }} />
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;