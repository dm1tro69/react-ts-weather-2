import {GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, WeatherState} from "../types";

const initialState: WeatherState = {
    data: null,
    loading: false,
    error: ''
}

export const weatherReducer = (state = initialState, action: WeatherAction): WeatherState => {
    switch (action.type) {
        case GET_WEATHER:
            return {...state, data: action.payload}
        case SET_LOADING:
            return {...state, loading: true}
        case SET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}
export default weatherReducer