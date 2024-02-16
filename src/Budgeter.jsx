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
    //create new object with values from input fields
    const newBill = {
      name: name,
      cost: cost,
      date: date,
    };

    // make new bills Array of Objects with new object
    setBills((b) => [...b, newBill]);

    // reset input fields
    setName("");
    setCost("");
    setDate("");
  }
  function handleRemove(index) {
    const filteredArray = bills.filter((element, i) => i !== index);
    setBills(filteredArray);
  }
  function sortByLowestCost() {
    const sortedLowest = [...bills].sort((a, b) => a.cost - b.cost);
    setBills(sortedLowest);
  }
  function sortByLargestCost() {
    const sortedLargest = [...bills].sort((a, b) => b.cost - a.cost);
    setBills(sortedLargest);
  }
  function sortByDate() {
    const sortedByDate = [...bills].sort((a, b) => a.date - b.date);
    setBills(sortedByDate);
  }
  function sortByName() {
    const sortedByName = [...bills].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setBills(sortedByName);
  }
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
      <h1 className="text-4xl font-black my-10">💲 Budgeter</h1>
      <div className="input-container">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="enter Name of bill"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full my-1"
        ></input>
        <input
          type="number"
          value={cost}
          onChange={handleCostChange}
          placeholder="enter Cost of bill"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full my-1"
        ></input>
        <input
          type="number"
          value={date}
          onChange={handleDateChange}
          placeholder="which day of the month is the bill due"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full my-1"
        ></input>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 my-1"
          onClick={handleAdd}
        >
          Add Bill
        </button>
      </div>
      <div id="tabs" className="my-5">
        <h2 className="mb-3">Select how to order your bills</h2>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          onClick={sortByName}
        >
          A-Z
        </button>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          onClick={sortByLowestCost}
        >
          $
        </button>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          onClick={sortByLargestCost}
        >
          $$$
        </button>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          onClick={sortByDate}
        >
          Date
        </button>
        <h2 className="my-3">Click on a bill to remove it</h2>
      </div>
      <div id="bills-container">
        <ul>
          {bills.map((element, index) => (
            <li
              key={index}
              className="bg-slate-200 p-2 rounded my-2 hover:border-red-700 hover:border-2"
              onClick={() => handleRemove(index)}
            >
              <div className="flex gap-3">
                <div className="w-52">{element.name}</div>
                <div className="w-16">${element.cost}</div>
                <div className="w-20">Due: {element.date}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Budgeter;
