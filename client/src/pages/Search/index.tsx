import axios from "axios";
import * as React from "react";
import {Link} from "react-router-dom";
import ISearchState from "./SearchState";
import {IArtist} from "./models";

export class Search extends React.PureComponent<{}, ISearchState> {
  readonly state: Readonly<ISearchState> = {
    artists: [],
    selectedLetter:""
  }
 getArtists = (event:React.MouseEvent): void => {
    const letter = event.currentTarget.innerHTML;
    axios.get(`/api/artists/${letter}`).then((response) => {
      this.setState({
        artists:response.data,
        selectedLetter:letter
      })
    })
  }
 getArtist = (event:React.MouseEvent): void => {
    const artist = event.currentTarget.innerHTML;
    console.log(artist);
  }
 renderArtists = () => {
    return this.state.artists.map((artist:IArtist, index) => {
      return (
        <li key={`artist${index}`} className="list-group-item">
        <Link to={`/${this.state.selectedLetter.toLowerCase()}/${artist.name.toLowerCase()}`}>{artist.name}</Link>
        </li>
      )
    })
  }
 renderHeaderLetterLI = () =>{
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return alphabet.map((value, index)=>{
      return(
        <li key={`${index}alpha`} className="nav-item">
        <a className="nav-link" onClick={this.getArtists}>{value}</a>
      </li>
      )
    })
  }
 render() {
    return (
      <div className="container-fluid">
        <div className="row col-12">

          <nav className="navbar navbar-expand-lg navbar-light bg-white" id="navbar">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              {this.renderHeaderLetterLI()}
              </ul>
            </div>
          </nav>
        </div>
        <div className="row col-12">
          <div className="card" style={{ "width": "18rem" }}>
            <ul className="list-group list-group-flush">
              {this.renderArtists()}
            </ul>
          </div>
          </div>
      </div>
    );
  }
}