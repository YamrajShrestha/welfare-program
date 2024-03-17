import React, { useState, useEffect } from 'react';
import '../css/CountDown.css'

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 394,
    hours: 3,
    minutes: 6,
    seconds: 17,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        let { days, hours, minutes, seconds } = prevCountdown;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <span className='text-[13px] text-[#1e1e1e] ms-2'>Initial Volunteer Briefing</span>
    <div className="countdown">
      <div className="countdown-item">
        <span className="value">{countdown.days}</span>
        <span className="label">DAYS</span>
      </div>
      <div className="countdown-item">
        <span className="value">{countdown.hours.toString().padStart(2, '0')}</span>
        <span className="label">HOURS</span>
      </div>
      <div className="countdown-item">
        <span className="value">{countdown.minutes.toString().padStart(2, '0')}</span>
        <span className="label">MINS</span>
      </div>
      <div className="countdown-item">
        <span className="value">{countdown.seconds.toString().padStart(2, '0')}</span>
        <span className="label">SECS</span>
      </div>
    </div>
    </>
  );
};

export default Countdown;