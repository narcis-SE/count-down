import React, { useEffect, useState } from "react"
import "./CountDownTimer.css"

const CountDownTimer = ({daysHoursMinSecs}) => {

    const {days = 0, hours = 0, minutes = 0, seconds = 60} = daysHoursMinSecs;
    const [[dys,hrs,mins,secs], setTime] = useState([days,hours,minutes,seconds]);

    let storage = localStorage.setItem("time", JSON.stringify([dys,hrs,mins,secs]));
    let retrieveData = JSON.parse(localStorage.getItem("time") as string);

    const tick = ()=>{
        if (retrieveData[0] === 0 && retrieveData[1] === 0 && retrieveData[2] === 0 && retrieveData[3] === 0) 
            reset()
        else if(retrieveData[1] === 0 && retrieveData[2] === 0 && retrieveData[3] === 0){
            setTime([dys-1, 23, 59, 59])
        }
        else if (retrieveData[2] === 0 && retrieveData[3] === 0) {
            setTime([dys, hrs - 1, 59, 59]);
        } else if (retrieveData[3] === 0) {
            setTime([dys, hrs, mins - 1, 59]);
        } else {
            setTime([dys, hrs, mins, secs - 1]);
        }
    }

    const reset = ()=> setTime([parseInt(days),parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    const finish = () => {
        
    }
    useEffect(()=>{
        const timerId = setInterval(()=> tick(), 1000);
        return () => clearInterval(timerId)
    })

    return(
        <div className="CountDownTimer">
            <div className="container">
                <p>{`${dys.toString().padStart(2, '0')}:
                ${hrs.toString().padStart(2, '0')}:
                ${mins.toString().padStart(2, '0')}:
                ${secs.toString().padStart(2, '0')}`}</p>
            </div>
        </div>
    )
}

export default CountDownTimer;