import React, { useState, useEffect } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as types from "./Redux/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(" ");
  const state = useSelector((state) => state.data);
  const [attempted, setAttempted] = useState(false);

  const updateSearch = () => {
    setQuery(search);
    setSearch("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSearch();
  };
  
  let dispatch = useDispatch();
  
  useEffect(() => {
    // Only make the API call if query is not empty
    if (query.trim() !== '') {
      dispatch({ type: types.FETCH_WEATHER_START, payload: query });
      setAttempted(true); // Set attempted to true when API call is made
    }
  }, [query]);

  useEffect(() => {
    if (attempted && state?.data && state?.data?.cod === '404') { // Check if attempted is true before showing error
      toast.error('City not found. Please enter a valid city name.');
    }
  }, [attempted, state.data]);


  const className = !state?.data?.name
    ? "data"
    : state?.data?.main?.temp_max - 273 > 30
    ? "App_hot"
    : "App_cold";

  return (
    <div>
      <ToastContainer />
      <div className={`common ${className}`}>
        <h2 className="header"> Weather App </h2>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            className="textfield"
            id="outlined-basic"
            label="city"
            variant="outlined"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            variant="contained"
            color="Primary"
            style={{ width: "80px", height: "50px", marginLeft: "20px" }}
            type="submit"
          >
            Search
          </Button>
        </form>
        {state?.data?.name ? (
          <div
            className={
              state?.data?.main?.temp_max - 273 > 30 ? "data_hot" : "data_cold"
            }
          >
            <h1>{state?.data?.name}</h1>
            <h2>
              <span>Temperature:- </span>
              {(state?.data?.main?.temp - 273)?.toFixed(2)}°C
            </h2>
            <h2>
              <span>Humidity:- </span>
              {state?.data?.main.humidity} %
            </h2>
            <h2>
              <span>Wind Speed:- </span>
              {state?.data?.wind?.speed} meter/sec
            </h2>
            <h2>
              <span>Weather Condition:- </span>
              {state?.data?.weather[0].description}
            </h2>
          </div>
        ) : (
          <h1></h1>
        )}
      </div>
    </div>
  );
}

export default App;
