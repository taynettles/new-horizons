import React, { useEffect, useState } from 'react';
import './App.css';

function Timer() {
  const calculateTimeLeft = () => {
    const diff = +new Date("2020-03-20") - +new Date();
    let timeLeft = {};

    if (diff > 0) {
      timeLeft = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) %  60),
        seconds: Math.floor((diff / 1000) % 60)
      };
    }
      return timeLeft;
  };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(()=> {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
      if (!timeLeft[interval]) {
        return;
      }

      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval}{", "}
        </span>
      );
    });

    return (
      <div>
        {timerComponents.length 
        ? timerComponents.concat('until...')
        : <span>It's out! See you on the island!</span>}
      </div>
    );
  }

export default Timer;