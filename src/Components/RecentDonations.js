

export default function RecentDonations({donations}) {

 
  return (
  
  <section>
  <h2>Recent Donations</h2>
  
   <ul> 

   {donations.map((person)=> {
    return
    <li><span>{person.name} donated ${person.amount}</span>{person.caption}</li>

   })}
    
  </ul>
</section>);


  


}

// 
// return
// <li><span>{person.name} donated ${person.amount}</span>{person.caption}</li>
// <li><span>{person[i].name} donated $ {amount[i].amount}</span>{caption[i].caption}</li>
