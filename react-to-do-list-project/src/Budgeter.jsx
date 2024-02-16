import { useState } from "react";

function Budgeter() {
  // for array of objects
  const [bills, setBills] = useState([]);
  // bill name
  const [name, setName] = useState("");
  // bill cost
  const [cost, setCost] = useState();
  // bille date
  const [date, setDate] = useState();

  function handleAdd() {
    const newBill = {
      name: name,
      cost: cost,
      date: date
    }

    setBills((b)=> [...b, newBill])
  }
  function handleRemove(index) {}
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleCostChange(event) {
    setCost(event.target.value);
  }
  function handleDateChange(event) {
    setDate(event.target.value);
  }

  return (
    <main className="p-5 md:mx-40 lg:mx-64 xl:mx-96 ">
      <h1 className="text-4xl font-black my-10">Budgeter</h1>
      <div className="input-container">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="enter Name of bill"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full my-1"
        ></input>
        <input
          type="number"
          value={cost}
          onChange={handleCostChange}
          placeholder="enter Cost of bill"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full my-1"
        ></input>
        <input
          type="number"
          value={date}
          onChange={handleDateChange}
          placeholder="enter Date of bill"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full my-1"
        ></input>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 my-1"
          onClick={handleAdd}
        >
          Add Bill
        </button>
      </div>
      <div id="tabs">
        <h2>tab row</h2>
      </div>
      <div id="bills-container">
        <ul>
          {bills.map()}
        </ul>
      </div>
    </main>
  );
}

export default Budgeter;
