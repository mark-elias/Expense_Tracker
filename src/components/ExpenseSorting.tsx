interface Props {
  onSort: (category: "name" | "smallest" | "biggest" | "dueDate") => void;
}

function ExpenseSorting({ onSort }: Props) {
  return (
    <div className="flex gap-2">
      <button className="sortButton" onClick={() => onSort("name")}>
        A-Z
      </button>
      <button className="sortButton" onClick={() => onSort("smallest")}>
        $
      </button>
      <button className="sortButton" onClick={() => onSort("biggest")}>
        $$$
      </button>
      <button className="sortButton" onClick={() => onSort("dueDate")}>
        Date
      </button>
    </div>
  );
}

export default ExpenseSorting;
