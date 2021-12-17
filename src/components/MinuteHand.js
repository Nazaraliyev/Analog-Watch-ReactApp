import React from "react";

function MinuteHand({watch}) {
  let degre = (watch.Minute * 6) - 90;
  return (
    <div
      id="MinuteHand" className="hand"
      style={{ transform: `translateY(-50%) rotate(${degre}deg)` }}
    ></div>
  );
}

export default MinuteHand;
