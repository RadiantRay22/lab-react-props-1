import React from "react";
import App from "../App";

export default function Progress( {donations,targetAmount}) {
  
  let totalDonated = 0;
  donations.forEach((donations) => {
    totalDonated += donations.amount 
    return totalDonated
  })


  return (<section className="progress">
  <h2>
    Raised <span className="secondary">${totalDonated}</span> of
    <span className="secondary">${targetAmount}</span>
  </h2>
</section>
)}
