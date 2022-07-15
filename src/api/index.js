
// export const options = {
//     method:'GET',
//      headers: {
//         "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
//         "X-RapidAPI-Host":"community-open-weather-map.p.rapidapi.com"
//     },
// };

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b2f1f667bbmsh4f448b7c45245f8p11894djsnec04dbaac9cc",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
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


// rl --get --include 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=new&types=CITY&sort=name&offset=0&limit=10' \
//     -H 'x-rapidapi-key: YOUR_API_KEY' \
//     -H 'x-rapidapi-host: wft-geo-db.p.rapidapi.com'

