import axios from "axios";

export const getWeather = async(query)=>{
    // const url=`https://api.openweathermap.org/data/2.5/weather?q={query}&appid=89f551cc72931ac0642c29c0e0db8885`;
    // console.log("test",axios.get(url))
    // return await axios.get(url)
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=89f551cc72931ac0642c29c0e0db8885`);
        const data= await response.json();
        return data;
    } catch (e){
        console.log(e);
    }
    
}