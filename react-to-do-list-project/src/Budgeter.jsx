import { useState } from "react";
import InputContainer from "./InputContainer";
import TabContainer from "./TabContainer";
import BillContainer from "./BillContainer";

function Budgeter() {

  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  
  return (
    <div className="p-5 md:mx-40 lg:mx-64 xl:mx-96 ">
      <h1 className="text-4xl font-black my-10">Budgeter</h1>
      <InputContainer></InputContainer>
      <TabContainer></TabContainer>
      <BillContainer></BillContainer>
    </div>
  );
}

export default Budgeter;
