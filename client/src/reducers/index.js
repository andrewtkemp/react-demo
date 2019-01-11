import { combineReducers } from "redux";
import artistsReducer from "./artistsReducer";
import lyricsReducer from "./lyricsReducer";
const rootReducer = combineReducers({
    lyrics:lyricsReducer,
    artists:artistsReducer
});

export default rootReducer;