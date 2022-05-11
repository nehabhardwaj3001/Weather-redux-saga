import * as types from "./actions";

const initialState = {
    // weather : [{min:null, max:null, main: " "}],
    // error : null,
    // loading : false,
};

 const weatherReducer = (state= initialState, action) => {
    switch(action.type) {
        case types.FETCH_WEATHER_START : 
        return{
            ...state,
            loading: true,
        };
        case types.FETCH_WEATHER_SUCCESS : 
        console.log("action", action)
        return{
            ...state,
            loading: false,
            data: action.data,
        };
        case types.FETCH_WEATHER_FAILURE : 
        return{
            ...state,
            loading: false,
            error: action.payload,
        };
        default:
            return state;
    }
}

export default weatherReducer;