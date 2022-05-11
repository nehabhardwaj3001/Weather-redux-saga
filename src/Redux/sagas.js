import { takeLatest, all, put, fork, call } from "redux-saga/effects";
import {FETCH_WEATHER_START, fetchWeatherSuccess } from './actions';
import { getWeather } from "./api";

export function* onLoadWeatherAsync({payload: query}) {
	try {
		console.log("query" , query);
		const response = yield call(getWeather, query);
		console.log({response})
		yield put(fetchWeatherSuccess(response));
	} catch (error) {
		console.log({error})
		// yield put({type: types.FETCH_WEATHER_FAILURE, payload: error});
	}
}
export function* onLoadWeather() {
	yield takeLatest(FETCH_WEATHER_START, onLoadWeatherAsync);
}

const weatherSaga  = [fork(onLoadWeather)];

export default function* rootSaga() {
	yield all([...weatherSaga]);
}