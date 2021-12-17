import React, { useEffect, useState } from "react";
import DateObject from "react-date-object";

function SecondHand({watch}) {
    let degre = (watch.Second*6)-90;
  return (
    <div
      id="SecondHand" className="hand"
      style={{ transform: `translate(-15%, -50%) rotate(${degre}deg)` }}
    ></div>
  );
}

export default SecondHand;
