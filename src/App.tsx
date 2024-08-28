import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseSorting from "./components/ExpenseSorting";
import ExpenseForm from "./components/ExpenseForm";

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

  // function handleSorting(category: "name" | "amount" | "date") {
  //   let sortedExpenses;
  //   if (category === "name") {
  //     sortedExpenses = [...expenses].sort();
  //   }
  // }

  // Function to handle sorting of expenses based on a category
  const handleSort = (
    category: "name" | "smallest" | "biggest" | "dueDate"
  ) => {
    setExpenses((prevExpenses) => {
      const sortedExpenses = [...prevExpenses].sort((a, b) => {
        if (category === "name") {
          return a.name.localeCompare(b.name);
        } else if (category === "smallest") {
          return a.amount - b.amount;
        } else if (category === "biggest") {
          return b.amount - a.amount;
        } else if (category === "dueDate") {
          return a.dueDate - b.dueDate;
        }
        return 0;
      });
      return sortedExpenses;
    });
  };

  return (
    <>
      <section className="p-10 container bg-customPurple">
        <div className=" flex flex-col gap-7 bg-white p-5 rounded-2xl shadow-2xl border border-zinc-300 w-[500px]">
          <h1 className="text-3xl font-medium text-center italic border-b-2 border-customPurple mb-4">
            Expense{" "}
            <span className="font-black text-customPurple">Tracker</span>
          </h1>
          <ExpenseForm></ExpenseForm>
          <ExpenseSorting onSort={handleSort}></ExpenseSorting>
          <ExpenseList
            onDelete={handleDelete}
            expenses={expenses}
          ></ExpenseList>
        </div>
      </section>
    </>
  );
}

export default App;
