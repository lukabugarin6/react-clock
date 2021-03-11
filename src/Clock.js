import React from "react";
import { useClock } from "./hooks/useClock";

export const Clock = () => {
  const timer = useClock(new Date());

  const seconds = timer.getSeconds();
  const minutes = timer.getMinutes();
  const hours = timer.getHours();
  return (
    <div className="clock-wrapper">
      <h1 className="clock-wrapper__heading">custom hook clock</h1>
      <div className="clock-wrapper__content">
        <div className="clock-wrapper__number clock-wrapper__hours">
          {hours < 10 && 0}
          {hours}
        </div>
        <span className="dots">:</span>
        <div className="clock-wrapper__number clock-wrapper__minutes">
          {minutes < 10 && 0}
          {minutes}
        </div>
        <span className="dots">:</span>
        <div className="clock-wrapper__number clock-wrapper__seconds">
          {seconds < 10 && 0}
          {seconds}
        </div>
      </div>
    </div>
  );
};
