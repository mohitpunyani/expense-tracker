import { useReducer, useState } from "react";

const initialState = {
  expenses: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        expenses: [...state.expenses, action.payload], // its like state.expenses.push(action.payload)
      };

    case "DELETE_EXPENSE":
      return {
        // filter return only those expenses where id is not equal to action.payload
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

function ExpenseTracker() {
  // useReducer for expense list & actions (add/delete
  const [state, dispatch] = useReducer(reducer, initialState);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const addExpense = () => {
    if (!title || !amount) return;

    dispatch({
      // these values pass in reducer in action 
      type: "ADD_EXPENSE",
      payload: {
        id: Date.now(),
        title,
        amount: Number(amount),
        quantity,
      },
    });

    setTitle("");
    setQuantity("");
    setAmount("");
  };

  const handleDeleteExpense = (id) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  // total expense
  const total = state.expenses.reduce((sum, expense) => sum + expense.amount * expense.quantity,0);

  return (
    <div className="min-h-screen m-auto bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>

        <div className="space-y-3">
          <input
          type="text"
            placeholder="Expense title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 border rounded"
        />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded"
          />

          <button
            onClick={addExpense}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Add Expense
          </button>
        </div>

        <ul className="mt-4 space-y-3">
  {state.expenses.map((expense) => {
    console.log(expense);
    return (
      <li
        key={expense.id}
        className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:shadow transition"
      >
        <div>
          <p>{expense.title}</p>
        
          <p className="text-lg font-semibold text-gray-800">
            ₹{expense.amount * expense.quantity}
          </p>
        </div>

        <button
          onClick={() => handleDeleteExpense(expense.id)}
          className="text-red-500 hover:text-red-700 font-bold text-lg"
        >
          ✕
        </button>
      </li>
    );
  })}
</ul>


        <h2 className="mt-4 font-semibold">
          Total: ₹{total}
        </h2>
      </div>
    </div>
  );
}

export default ExpenseTracker;
