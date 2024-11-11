import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime(time) {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const amOrPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${hours}:${minutes}:${seconds} ${amOrPm}`;
  }

  console.log(formatTime(), "Hellllloooooooo");

  return (
    <div className="clock-container">
      <div className="clock">
        <span className="">{formatTime(time)}</span>
      </div>
    </div>
  );
}
export default DigitalClock;
