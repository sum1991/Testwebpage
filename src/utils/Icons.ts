import * as weatherIcons from "../weatherIcons/icons.json";
//import dayjs from "dayjs";
import { CurrentWeatherData } from "../models/current-weather";
import dayjs from 'dayjs';
import { HourlyWeatherData, List } from "../models/hourly-weather";
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
const products:any = (weatherIcons as any).default;
const prefix:string = "wi wi-";


export const getIcons=(currentWeather:CurrentWeatherData):string=>{
  
 
  //const currentTime =(dayjs as any).utc().;
  const currentTime = (dayjs as any)
  .utc(currentWeather.dt)
  .utcOffset(currentWeather.timezone)
  .format();
  const sunrise = (dayjs as any)
    .utc(currentWeather.sys.sunrise)
    .utcOffset(currentWeather.timezone)
    .format();
  const sunset = (dayjs as any)
    .utc(currentWeather.sys.sunset)
    .utcOffset(currentWeather.timezone)
    .format();
  console.log("sunsrise"+sunrise);
  console.log("sunsrise"+sunset);
  const timeOfDay =
  currentTime > sunrise && currentTime < sunset ? "day" : "night";
  console.log("time of the day is"+timeOfDay);
  const icon:string = prefix + products[timeOfDay][currentWeather.weather[0].id].icon;
   return icon

}
export const getCardData = (currentWeatherData:CurrentWeatherData, hourlyData:List)=>{
   const dayname:string= dayjs(hourlyData.dt_txt).format("dddd")
   const time:string =(dayjs(hourlyData.dt_txt) as any).utcOffset(currentWeatherData.timezone).format("h:mm A")
   const currentHour = dayjs(hourlyData.dt).format("H");
   const timeOfDay = Number(currentHour) > 7 && Number(currentHour) < 19 ? "day" : "night";
   const icon = prefix + products[timeOfDay][hourlyData.weather[0].id].icon;
   return {dayname,icon,time};
}
export const currentDaysAndTime =(hourlyData:List,dayMap:Map<any,any>)=>{
  const dayname:string= dayjs(hourlyData.dt_txt).format("dddd")
  if(dayMap.has(dayname)){
    let val = dayMap.get(dayname);
    val.push(hourlyData);
  }else{
   let val = [];
   val.push(hourlyData);
   dayMap.set(dayname,val);
  }
}



