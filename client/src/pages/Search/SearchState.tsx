import {IArtist} from "./models";
  export default interface ISearchState {
    artists:IArtist[]
    selectedLetter:string
  }