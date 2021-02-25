import { Card,CardContent,CardMedia,Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CurrentWeatherData } from "../../models/current-weather";
import { HourlyWeatherData, List } from "../../models/hourly-weather";
import {getCardData} from "../../utils/Icons"
const useStyles = makeStyles({
    root: {
      maxWidth: 345
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    cardslide:{
        height: 160,
        width: 110,
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
export const MiddleCard:React.FunctionComponent<{currentWeatherData:CurrentWeatherData,hourlyData:List}> =({currentWeatherData,hourlyData})=>{
    const classes = useStyles();
    const humidity = "wi wi-humidity";
    const strongWind = "wi wi-strong-wind";
    let {dayname,icon,time} = getCardData(currentWeatherData,hourlyData);
    console.log(dayname)
    return(
        <Card className= {classes.cardslide}>
            <CardContent>
            <Typography 
            className="week-day"
            >
              {dayname}
            </Typography>
             <span
            className={`${icon} ${classes.atmospheric}`}
             ></span>
             <Typography variant="body2" component="span" color="textPrimary">
            {hourlyData.main.temp_min}&deg;
          </Typography>
          <Typography variant="body2" component="span" color="textSecondary">
            {hourlyData.main.temp_max}&deg;
          </Typography>
          <Typography 
            className="week-day"
            >
              {time}
            </Typography>
            </CardContent>
        </Card>
    )
}