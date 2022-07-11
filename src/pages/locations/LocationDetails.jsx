import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Charts from "../../components/chart/Charts";
import "./LocationDetails.css";

import { fetchWeatherInfo, options } from "../../api";

const Info = ({ detailImage, detail }) => {
  return (
    <div className="app__flex">
      <div className="app__flex-col" style={{ width: "50%" }}>
        <div className="app__info-img app__flex">
          <p>{detailImage} </p>
        </div>
      </div>

      <div className="app__flex-col" style={{ width: "50%", color: "#021430" }}>
        <h3 style={{ color: "#021430" }}>{detail}</h3>
      </div>
    </div>
  );
};

const LocationDetails = () => {
  const { name } = useParams();
  const [data, setData] = useState({});
  const [forecasts, setForecasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toDegreeCelsius = (fe) => {
    return `${Math.floor(((fe - 32) * 5) / 9).toFixed(2)} ˚C`;
  };

  useEffect(() => {
    const fetchData = async () => {
      const info = await fetchWeatherInfo(
        `https://community-open-weather-map.p.rapidapi.com/weather?q=${name}`,
        options
      );
      setIsLoading(true);
      setData(info);
      setIsLoading(false);
    };

    fetchData();
  }, [name]);

  useEffect(() => {
    const fetchForecastData = async () => {
      const data = await fetchWeatherInfo(
        `https://community-open-weather-map.p.rapidapi.com/forecast?q=${name}`,
        options
      );
      console.log(data);
      setForecasts(data);
    };
    fetchForecastData();
  }, [name]);

  return (
    <div className="app__location">
      <Link to="/" className="app__location-btn">
        <motion.p 
          whileInView={{y:[-100,0]}}
          transition={{duration: 0.5}}
          className="app__flex"
        >
        Home</motion.p>
      </Link>

      <div className="app__location-body">
        {!isLoading ? (
          <div className="app__location-card">
            <motion.div
              className="app__location-card-item"
              whileInView={{ y: [-100, 0] }}
              transition={{ duration: 0.5 }}
            >
              <div className="app__flex-col">
                <h2
                  style={{
                    marginTop: ".5rem",
                    marginBottom: "1rem",
                    color: "#021430",
                  }}
                >
                  {data?.name}
                </h2>
                <Info
                  detailImage="Temp"
                  detail={toDegreeCelsius(data?.main?.temp)}
                />
                <Info
                  detailImage="Feels_Like"
                  detail={toDegreeCelsius(data?.main?.feels_like)}
                />
                <Info detailImage="Humidity" detail={data?.main?.humidity} />
                <Info detailImage="Pressure" detail={data?.main?.pressure} />
                {data?.weather?.map((info, i) => (
                  <div key={i} style={{ width: "100%" }}>
                    <Info detailImage="Description" detail={info.description} />
                    <Info detailImage="Main" detail={info.main} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}

        {forecasts?.list?.slice(0, 5).map((forecast, i) => {
        return (
          <Charts
            key={i}
            title={forecast?.dt_txt}
            info={[toDegreeCelsius(forecast?.main?.temp), forecast?.main?.humidity, forecast?.main?.pressure]}
          />
        );
      })}
     
      </div>
    </div>
  );
};

export default LocationDetails;
