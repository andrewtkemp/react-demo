import axios from "axios";
import * as React from "react";
export class Search extends React.PureComponent<{}> {
  public state = {
    artists: [],
    selectedLetter:""
  }
  public getArtists = (event:React.MouseEvent): void => {
    const letter = event.currentTarget.innerHTML;
    axios.get(`/api/artists/${letter}`).then((response) => {
      this.setState({
        artists:response.data,
        selectedLetter:letter
      })
    })
  }
  public renderArtists = () => {
    return this.state.artists.map((artist:{name:string,href:string}, index) => {
      return (
        <li key={`artist${index}`} className="list-group-item">
        <a className="nav-link" href={artist.href}>{artist.name}</a></li>
      )
    })
  }
  public renderHeaderLetterLI = () =>{
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return alphabet.map((value, index)=>{
      return(
        <li key={`${index}alpha`} className="nav-item">
        <a className="nav-link" onClick={this.getArtists}>{value}</a>
      </li>
      )
    })
  }
  public render() {
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