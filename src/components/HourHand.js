import React from "react";

function HourHand({ watch }) {
    let minuteDegre = watch.Minute/12;
    let hour = watch.Hour;
    console.log(hour);
    if(watch.Hour >= 12){
        hour = watch.Hour - 12;
    }
    
    let degre = ((hour*30)-90)+minuteDegre*6;
  return (
    <div
      id="HourHand" className="hand"
      style={{ transform: `translateY(-50%) rotate(${degre}deg) ` }}
    ></div>
  );
}

export default HourHand;
