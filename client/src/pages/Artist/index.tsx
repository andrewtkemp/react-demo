import * as React from "react";
import axios from "axios";
import ArtistProps from "./ArtistProps";
export const Artist: React.StatelessComponent<ArtistProps> = (props:ArtistProps) => {
   const getArtist = () => {
      const { letter, artist } = props.match.params;
      axios.get(`/api/artists/${letter}/${artist}`).then((response)=>{
         console.log(response);
      })
   }
    return (
     <div className="container-fluid">
        Artist Page
        <button onClick={getArtist}>Get Artist</button>
     </div>
    );
  } 