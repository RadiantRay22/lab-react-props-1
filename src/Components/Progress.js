import React from "react";
import App from "../App";

export default function Progress( progress, {targetAmount}) {
  const donations = progress.donations
  let totalDonated = 0;
  donations.forEach(donation => {
    totalDonated += donation.amount 
  })
  

  return <section className="progress">
  <h2>
    Raised <span className="secondary">${totalDonated}</span> of
    <span className="secondary">${targetAmount}</span>
  </h2>
</section>;
}
