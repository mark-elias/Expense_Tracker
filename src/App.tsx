import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "netflix", amount: 15, dueDate: 4 },
    { id: 2, name: "spotify", amount: 20, dueDate: 12 },
    { id: 3, name: "credit card", amount: 50, dueDate: 2 },
    { id: 4, name: "school loans", amount: 285, dueDate: 11 },
  ]);

  function handleDelete(expenseID: number) {
    setExpenses(expenses.filter((exp) => exp.id !== expenseID));
  }
  return (
    <>
      <div className="container">
        <ExpenseList onDelete={handleDelete} expenses={expenses}></ExpenseList>
      </div>
    </>
  );
}

export default App;
