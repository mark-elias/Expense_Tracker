import { useState } from "react";

function Budgeter() {

  const [] = useState([{}])

  const bills = [
    { id: 1, name: 'School Loans', cost: 285, date: 11 },
    { id: 2, name: 'Spotify', cost: 15, date: 22 },
    { id: 3, name: 'Season Tickets', cost: 82, date: 6 }
  ];
  
  return (
    <div className="p-5 md:mx-40 lg:mx-64 xl:mx-96 ">
      <h1 className="text-4xl font-black my-10">Budgeter</h1>
      
    </div>
  );
}

export default Budgeter;
