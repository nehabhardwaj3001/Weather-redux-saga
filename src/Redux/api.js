import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getWeather = async(query)=>{
    // const url=`https://api.openweathermap.org/data/2.5/weather?q={query}&appid=89f551cc72931ac0642c29c0e0db8885`;
    // console.log("test",axios.get(url))
    // return await axios.get(url)
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=89f551cc72931ac0642c29c0e0db8885`);
        const data= await response.json();
        // if(data.cod !== 200) {
        //     toast.error("Failed to fetch weather data. Please try again later.", data.message);
        // }
        console.log("data", data)
        return data;
    } catch (e){
        // toast.error("Failed to fetch weather data. Please try again later.", e);
        console.log("Failed to fetch weather data. Please try again later.", e);
    }
    
}