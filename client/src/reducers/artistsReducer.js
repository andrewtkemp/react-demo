const artistsReducer = (state = {artists:[], artist:[]}, action) => {
  switch (action.type) {
    case "GET_ARTIST":
      console.log("GET ARTIST Reducer", action);
      return [...state];
    case "GET_ARTISTS":
      console.log("GET ARTISTS Reducer", action);
      if(action.payload){
        return {artists:action.payload}
      }
        return state
    default:
      return state;
  }
};

export default artistsReducer;