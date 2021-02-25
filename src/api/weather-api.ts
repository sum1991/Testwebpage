import { City } from "../models/city";
import { CurrentWeatherData } from "../models/current-weather";
import { HourlyWeatherData } from "../models/hourly-weather";
import  {currentDaysAndTime} from "../utils/Icons"
const baseUrl = "https://api.openweathermap.org/data/2.5/";
const apiKey = "7397670e46c9351913257d1843a6d5cd";

export const getCurrentWeatherForCity = (
  city: City,
  units = "metric"
): Promise<CurrentWeatherData> => {
  return fetch(
    `${baseUrl}weather?id=${city.id}&units=${units}&appid=${apiKey}`
  ).then((response: Response) => response.json());
};

export const getHourlyWeatherForCity = (
  city: City,
  units = "metric"
): Promise<HourlyWeatherData> => {
  let dayMap = new Map();
  return fetch(
    `${baseUrl}forecast?id=${city.id}&units=${units}&appid=${apiKey}`
  ).then((response: Response) => response.json()).then((data:HourlyWeatherData)=>{
    /*data.list.forEach((data)=>{
     currentDaysAndTime(data,dayMap);
    });*/
    //data.list =data.list.filter(listdata =>listdata.dt_txt.match(/09:00:00/))
    //data.dayMap = dayMap;
    return data;
  });
};
