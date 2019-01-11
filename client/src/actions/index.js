import axios from "axios";
import {GET_ARTIST, GET_ARTISTS} from "./types";


export const getArtist = (letter, artist) => async dispatch => {
    const res = await axios.get(`/api/artist/${letter}/${artist}`);
    dispatch({
        type: GET_ARTIST,
        payload: res.data
    });
};

export const getArtists = (letter) => async dispatch => {
    console.log("Getting Artists That Start with the letter ", letter);
    const res = await axios.get(`/api/artists/${letter}`);
    console.log(res.data);
    dispatch({
        type: GET_ARTISTS,
        payload: res.data
    });
};