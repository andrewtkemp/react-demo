import React, { Component } from "react";


export default class Search extends Component {
    getArtists = (event) =>{
        let letter = event.target.innerText
        console.log("Hello", letter)
    }
    render() {
        return (
            <div>
                <h1>Search</h1>
                <ul>
                   <li onClick={this.getArtists}>A</li>
                   <li onClick={this.getArtists}>B</li>
                   <li onClick={this.getArtists}>C</li>
                   <li onClick={this.getArtists}>D</li>
                   <li onClick={this.getArtists}>E</li>
                   <li onClick={this.getArtists}>F</li>
                   <li onClick={this.getArtists}>G</li>
                   <li onClick={this.getArtists}>H</li>
                   <li onClick={this.getArtists}>I</li> 
                   <li onClick={this.getArtists}>J</li>
                   <li onClick={this.getArtists}>K</li>
                   <li onClick={this.getArtists}>L</li>
                   <li onClick={this.getArtists}>M</li>
                   <li onClick={this.getArtists}>N</li>
                   <li onClick={this.getArtists}>O</li>
                   <li onClick={this.getArtists}>P</li>
                   <li onClick={this.getArtists}>Q</li>
                   <li onClick={this.getArtists}>R</li>
                   <li onClick={this.getArtists}>S</li>
                   <li onClick={this.getArtists}>T</li>
                   <li onClick={this.getArtists}>U</li>
                   <li onClick={this.getArtists}>V</li>
                   <li onClick={this.getArtists}>X</li>
                   <li onClick={this.getArtists}>Y</li>
                   <li onClick={this.getArtists}>Z</li>
                   <li onClick={this.getArtists}>#</li>
                </ul>
            </div>
        )
    }
}