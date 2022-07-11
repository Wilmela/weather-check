
export const options = {
    method:'GET',
     headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host":"community-open-weather-map.p.rapidapi.com"
    },
};

export const fetchWeatherInfo = async (url,options) =>{
    try {
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }
    

}