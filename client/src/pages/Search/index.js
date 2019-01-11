import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getArtists } from "../../actions";

class Search extends Component {

    fetchArtists = (event) => {
        let letter = event.target.innerText.toLowerCase()
        this.props.getArtists(letter)
    }
    render() {
        return (
            <div>
                <ul className="d-flex justify-content-center">
                    <li className="list-group-item" onClick={this.fetchArtists}>A</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>B</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>C</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>D</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>E</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>F</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>G</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>H</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>I</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>J</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>K</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>L</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>M</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>N</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>O</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>P</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>Q</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>R</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>S</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>T</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>U</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>V</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>X</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>Y</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>Z</li>
                    <li className="list-group-item" onClick={this.fetchArtists}>#</li>
                </ul>
                {this.props.artists.artists ? this.props.artists.artists.map((artist, i)=>{
                    return(
                        <div key={`artist${i}`}>
                            {artist.name}
                        </div>
                    )
                }) : ""}
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getArtists }, dispatch);
}
function mapStateToProps(state) {
    return {
        artists: state.artists
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);