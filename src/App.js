import React, {useState, useEffect} from 'react'; 
import './App.css';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as types from './Redux/actions';

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(" ");
  const state  = useSelector(state => state.data);

  const updateSearch = () => {
    setQuery(search);
    setSearch("");
  }
  
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.FETCH_WEATHER_START, payload: query })
  }, [query]);

  console.log("state...", state, state?.data)

  const className = !state?.data?.name ? "data" : state?.data?.main?.temp_max-273 > 30 ? "App_hot" : "App_cold";

  return (
    <div>
    <div  className={`common ${className}`}>
      <h2 className='header'> Weather App </h2>
      <form noValidate autoComplete='off'>
        <TextField className='textfield'
          id="outlined-basic"
          label="city"
          variant="outlined"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
        <Button variant="contained"
          color='Primary'
          style={{ width: '80px', height: '50px' }}
          onClick={updateSearch}>
          Search
        </Button>
      </form>
     {state?.data?.name ?
      (
     <div className={state?.data?.main?.temp_max-273 > 30 ? "data_hot" : "data_cold"}>
          <h1>{state?.data?.name}</h1>
          <h2><span>Max-Temp:- </span>{(state?.data?.main?.temp_max-273)?.toFixed(2)}°C</h2>
          <h2><span>Min-Temp:- </span>{(state?.data?.main?.temp_min-273)?.toFixed(2)}°C</h2>
          <h2><span>{state?.data?.weather[0]?.main}</span></h2>
        </div>) : <h1></h1>}
    </div>
    </div>
  );
}

export default App;
