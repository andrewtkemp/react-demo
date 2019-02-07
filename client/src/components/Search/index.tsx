import axios from "axios";
import * as React from "react";
export class Search extends React.PureComponent<{}> {
  public componentDidMount(){
    axios.get("/api/artists/a").then((response)=>{
      console.log(response)
    })
  }
  public render() {
    return (
      <div className="container-fluid">
        Hi Search
         </div>
    );
  }
}