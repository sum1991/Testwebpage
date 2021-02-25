import { Card,CardContent,CardMedia,Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        scales: {
          yAxes: [{display: false,
              ticks: {suggestedMin: 20,suggestedMax: 45}}]
          , gridLines: {  color: "blue"},
      },
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
const useStyles = makeStyles({
    root: {
      maxWidth: 345
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    card:{
      minWidth: 600,
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
export const BottomCard =()=>{
    const classes = useStyles();
    const humidity = "wi wi-humidity";
    const strongWind = "wi wi-strong-wind";
    return(
     <Card className= {classes.card}>
        <CardContent>
             <Line  options={{
                                        title: {  display: true, fontSize: 20},
                                        maintainAspectRatio: true,
                                        legend: { display: false,},
                                        scales: {
                                            yAxes: [{display: false,
                                                ticks: {suggestedMin: 20,suggestedMax: 45}}]
                                            , gridLines: {  color: "blue"},
                                        },
                                    }} data={data} />
        </CardContent>
      </Card>
    )
}

