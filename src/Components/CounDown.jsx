import React, { useState, useEffect } from "react";
import { useFetchAllOfferQuery } from "../App/featchers/Offer/offerSlice";


function CountDown() {
  const { isError, isLoading, data } = useFetchAllOfferQuery();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // if (isLoading || isError || !data?.data?.data?.length) {
    //   // Handle loading, error, or no data condition
    //   setDays(0);
    //   setHours(0);
    //   setMinutes(0);
    //   setSeconds(0);
    //   return;
    // }
    const deuarationDate = new Date(data?.data?.data[0].programDate);
    // Ensure the countdown is only active for future dates
    if (deuarationDate < new Date()) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      return;
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = Math.max(0, deuarationDate - now);

      setDays(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeLeft % (1000 * 60)) / 1000));

      // If the countdown is over, clear the interval
      if (timeLeft <= 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [isLoading, isError, data]);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-[#FED700] rounded-box text-white">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": days?.toString().padStart(2, "0") }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-[#FED700] rounded-box text-white">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": hours.toString().padStart(2, "0") }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-[#FED700] rounded-box text-white">
        <span className="countdown font-mono text-5xl">
          <span
            style={{ "--value": minutes.toString().padStart(2, "0") }}
          ></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-[#FED700] rounded-box text-white">
        <span className="countdown font-mono text-5xl">
          <span
            style={{ "--value": seconds.toString().padStart(2, "0") }}
          ></span>
        </span>
        sec
      </div>
    </div>
  );
}

export default CountDown;
