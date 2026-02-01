
{
  expenses: [
    { id: 123, title: "Tea", amount: 10 }
  ]
}

case "ADD_EXPENSE":
  return {
    expenses: [...state.expenses, action.payload],
  };
What happens:
Takes old expenses
Adds new expense at the end
Never mutates state (important in React)

const [state, dispatch] = useReducer(reducer, initialState);
state.expenses → all expenses
dispatch() → sends actions to reducer

State Type Tool
Form inputs (title, amount)	Simple, local	useState
Expense list (add/delete)	Complex, action-based	useReducer

UI → dispatch(action) → reducer → new state → UI re-renders

Why {console.log(expense)} fails but {...console.log(expense)} doesn’t
Code	Reason
{console.log(expense)}	JSX tries to render result
{...console.log(expense)}	Spread consumes undefined, renders nothing

You’re basically hiding the side-effect.