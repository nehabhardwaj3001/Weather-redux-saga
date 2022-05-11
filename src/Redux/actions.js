export const FETCH_WEATHER_START = "FETCH_WEATHER_START"
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS"
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE"

export const fetchWeatherStart = () => ({ type: FETCH_WEATHER_START });
export const fetchWeatherSuccess = data => ({ type: FETCH_WEATHER_SUCCESS, data });
export const fetchWeatherFailure = error => ({ type: FETCH_WEATHER_FAILURE, error });