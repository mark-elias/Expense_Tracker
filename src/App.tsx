import { useState } from "react";
import ExpenseList, { Expense } from "./components/ExpenseList";
import ExpenseSorting from "./components/ExpenseSorting";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  function handleDelete(expenseID: number) {
    setExpenses(expenses.filter((exp) => exp.id !== expenseID));
  }

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
      <section className="flex justify-center items-center py-10 px-1">
        <div className="container">
          <h1 className="text-3xl font-medium text-center italic border-b-2 border-customPurple">
            Expense{" "}
            <span className="font-black text-customPurple">Tracker</span>
          </h1>
          <ExpenseForm
            onSubmit={(exp) =>
              setExpenses([...expenses, { ...exp, id: expenses.length + 1 }])
            }
          ></ExpenseForm>
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
