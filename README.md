
## 📝 Notes

- **State**
  - `{ expenses: [ { id: 123, title: "Tea", amount: 10 } ] }`

- **Reducer (ADD_EXPENSE)**
  - `return { expenses: [...state.expenses, action.payload] }`
  - Takes old expenses
  - Adds new expense at the end
  - Never mutates state (important in React)

- **useReducer**
  - `const [state, dispatch] = useReducer(reducer, initialState)`
  - `state.expenses` → all expenses
  - `dispatch()` → sends actions to reducer

- **State Type vs Tool**
  - Form inputs (title, amount) → `useState`
  - Expense list (add / delete) → `useReducer`

- **Flow**
  - UI → dispatch(action) → reducer → new state → UI re-renders

- **JSX console.log**
  - `{console.log(expense)}` → JSX tries to render result
  - `{...console.log(expense)}` → spread consumes `undefined`, renders nothing
  - You’re basically hiding the side-effect

---

# 💰 Expense Tracker

An **Expense Tracker** web application that helps users track of spending money  with a clean and user-friendly interface.

## 🛠️ Tech Stack

**Frontend**
- React.js
- HTML5
- CSS3 / Tailwind CSS
- JavaScript (ES6+)



