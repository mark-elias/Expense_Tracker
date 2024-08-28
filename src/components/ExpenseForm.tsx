import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Expense name should be atleast 3 characters" })
    .max(20),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(1)
    .max(2000),
  dueDate: z
    .number({ invalid_type_error: "Due Date is required" })
    .min(1)
    .max(31),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

function ExpenseForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div>
        <label htmlFor="name">What is the name of the expense?</label>
        <input
          id="name"
          type="text"
          placeholder="Netflix"
          {...register("name")}
        ></input>
        {errors.name && <p className="errorMessage">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="amount">Enter the expense amount</label>
        <input
          id="amount"
          type="number"
          placeholder="15"
          {...register("amount", { valueAsNumber: true })}
        ></input>
        {errors.amount && (
          <p className="errorMessage">{errors.amount.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="dueDate">Enter the monthly due date</label>
        <input
          id="dueDate"
          type="number"
          placeholder="7"
          {...register("dueDate", { valueAsNumber: true })}
        ></input>
        {errors.dueDate && (
          <p className="errorMessage">{errors.dueDate.message}</p>
        )}
      </div>
      <div className="">
        <button type="submit" className="addButton">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
