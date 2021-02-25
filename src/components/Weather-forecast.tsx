import React from "react";
import { Card,CardContent,CardMedia,Paper, Divider,Grid,Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { City } from "../models/city";
import CitySelector from "./City-selector";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  getCurrentWeatherForCity,
  getHourlyWeatherForCity,
} from "../api/weather-api";
import { CurrentWeatherData } from "../models/current-weather";
import { cities } from "../constants/city-constants";
import { HourlyWeatherData } from "../models/hourly-weather";
import{TopCard} from "./WeatherCards/TopCard";
import{MiddleCard} from "./WeatherCards/MiddleCard";
import{BottomCard} from "./WeatherCards/BottomCard";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  card:{
    width: 840,
    height: 180
  },
  mainCard:{
   minWidth:600,
  },
  wi: {
    color: "#673ab7"
  },
  atmospheric: {
    fontSize: "28px",
    padding: "5px"
  },
  recommendation: {
    fontFamily: "Montserrat, sans-serif",
    padding: "20px 0px 10px 0px",
    fontSize: "26px",
    textAlign: "center"
  },
  paper: {
    height: 140,
    width: 100,
  },
});

const WeatherForecast: React.FunctionComponent = () => {
  const classes = useStyles();
  const [city, setCity] = React.useState<City>(cities[0]);
  const [
    currentWeather,
    setCurrentWeather,
  ] = React.useState<CurrentWeatherData>(null);

  const [hourlyWeather, setHourlyWeather] = React.useState<HourlyWeatherData>(
    null
  );

  const onCityChange = (city: City) => {
    setCity(city);
  };

  React.useEffect(() => {
    const loadWeather = async () => {
      await Promise.all([
        getCurrentWeatherForCity(city),
        getHourlyWeatherForCity(city),
      ]).then((results: [CurrentWeatherData, HourlyWeatherData]) => {
        const [current, hourly] = results;
        setCurrentWeather(current);
        setHourlyWeather(hourly);
      });
    };

    if (city) {
      loadWeather();
    }
  }, [city]);
  
  console.log("this is the data" + currentWeather);
  
  if(currentWeather && hourlyWeather){  
    console.log("this is the Length" + hourlyWeather.list.length);
  return (
    <div>
      <Grid container 
       direction="column" 
       spacing={4}
       alignItems="center"
       xs={12}
      >
      <Grid item xs={12} >
        <Typography variant="h5" gutterBottom>
          {(city && `Displaying Weather Information for ${city.name}`) ||
            `Select a City to View Weather Information`}
        </Typography>
        <CitySelector
          cities={cities}
          initialCityId={city.id.toString()}
          onCityChange={onCityChange}
        />
        </Grid>
      <Grid justify="center" item xs={6}>
      <Grid container  spacing={5} justify="center" alignContent="center">
      <Grid xs={12} item>
        <TopCard currentWeather={currentWeather} />
      </Grid>
      <Divider variant="middle" />
      <Grid xs={12} item>
      <Grid className={classes.card} container spacing={3}>
          {[0, 1, 2,3,4,5].map((value) => (
            <Grid key={value} item>
              <MiddleCard currentWeatherData={currentWeather} hourlyData={hourlyWeather.list[value]} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Grid xs={12} item>
      <Grid className={classes.card} container spacing={3}>
           {[6, 7, 8,9,10,11].map((value) => (
            <Grid key={value} item>
              <MiddleCard currentWeatherData={currentWeather} hourlyData={hourlyWeather.list[value]} />
            </Grid>
          ))}
          </Grid>
      </Grid>
      </Grid>
      </Grid>
      </Grid>
    </div>
  )}else {
    return (
      <div>
        <CircularProgress color="primary" />
      </div>
    );
  }
};

export default WeatherForecast;
