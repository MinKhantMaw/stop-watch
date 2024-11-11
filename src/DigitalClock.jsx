import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime(time) {
    if (!(time instanceof Date)) {
      time = new Date(time);
    }

    let hours = time.getHours();
    let minutes = time.getMinutes().toString().padStart(2, "0");
    let seconds = time.getSeconds().toString().padStart(2, "0");
    const amOrPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert to 12-hour format

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${amOrPm}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime(time)}</span> {/* Pass the `time` state */}
      </div>
    </div>
  );
}

export default DigitalClock;
