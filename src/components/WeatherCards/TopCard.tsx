import { Card,CardContent,CardMedia,Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {getIcons} from '../../utils/Icons';
import { CurrentWeatherData } from "../../models/current-weather";
const useStyles = makeStyles({
    root: {
      maxWidth: 345
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    card:{
      width: 770,
      height: 300
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
  });
export const TopCard:React.FunctionComponent<{currentWeather:CurrentWeatherData}> =({currentWeather})=>{
    const classes = useStyles();
    const humidity = "wi wi-humidity";
    const strongWind = "wi wi-strong-wind";
    let str = getIcons(currentWeather);
    console.log("this is current weather"+str);
    return(
<Card className= {classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Today's Weather
        </Typography>
        <CardMedia 
         className={str}
         src={str}
         style={{ fontSize: "128px", float: "right" }}
        />
        <Typography
          variant="h2"
          className="big-temp"
          color="textPrimary"
          component="h2"
          style={{ fontFamily: "Montserrat", paddingTop: "30px" }}
        >
          {currentWeather.main.temp}&#8457;
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Feels like {currentWeather.main.feels_like}&deg;F
        </Typography>
        <Typography
          variant="subtitle2"
          className="atmospheric-conditions"
          color="textSecondary"
          gutterBottom
          style={{ paddingTop: "40px" }}
        >
          <span
            className={`${strongWind} ${classes.atmospheric}`}
          ></span>
          {currentWeather.wind.speed} km/h Winds{" "}
          <span
            className={`${humidity} ${classes.atmospheric}`}
          ></span>
         {currentWeather.main.humidity}% Humidity
        </Typography>
      </CardContent>
      </Card>
    )
   
}

