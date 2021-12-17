import React,{useState, useEffect} from "react";
import DateObject from "react-date-object";
import HourHand from "./HourHand";
import MinuteHand from "./MinuteHand";
import SecondHand from "./SecondHand";
import SecondLine from "./SecondLine";

function Clock() {
  let SecondsArr = [];
  let SecondTransform = 0;
  let SecondDeg = 360 / 60;
  for (let i = 0; i < 60; i++) {
    SecondsArr.push(SecondTransform);
    SecondTransform += SecondDeg;
  }

  const [Watch, setWatch] = useState(
    {
      Second : 0,
      Minute : 0,
      Hour : 0,
    }
  );
  useEffect(() => {
    const interval = setInterval(() => {
      let date = new DateObject();
      setWatch({
        Second : date.second,
        Minute : date.minute,
        Hour : date.hour
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="Clock">
      {SecondsArr.map((second, index) => {
        return <SecondLine key={index} Deg={second} />;
      })}
      <MinuteHand watch = {Watch}/>
      <HourHand watch = {Watch}/>
      <SecondHand watch = {Watch}/>
    </section>
  );
}

export default Clock;
