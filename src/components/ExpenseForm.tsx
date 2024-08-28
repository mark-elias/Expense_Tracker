function ExpenseForm() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <label htmlFor="name">What is the name of the expense?</label>
        <input id="name" type="text" placeholder="Netflix"></input>
      </div>
      <div>
        <label htmlFor="name">Enter the expense amount</label>
        <input id="name" type="number" placeholder="15"></input>
      </div>
      <div>
        <label htmlFor="name">Enter the monthly due date</label>
        <input id="name" type="number" placeholder="7"></input>
      </div>
      <button type="submit" className="addButton">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
