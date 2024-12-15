// import { useReducer, useState } from "react";
// import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
// import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
// import ExpenseList from "./components/ExpenseList/ExpenseList";
// import "./App.css";

// const expenseReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_EXPENSE":
//       return [...state.expenses, action.payload];
//     case "DELETE_EXPENSE":
//       return {
//         expenses: state.expenses.filter((expense) => expense.id !== payload.id)
//       };
//     default:
//       return state;
//   }
// };

// function App() {
//   // Remove the useState hook and replace it with useReducer hook
//   // Implement the functionality to add and remove the transaction in reducer function
//   // const [expenses, setExpenses] = useState([]);

//   const [state, dispatch] = useReducer(expenseReducer, { expenses: [] });

//   const addExpense = (expense) => {
//     dispatch({ type: "ADD_EXPENSE", payload: { expense } });
//   };

//   const deleteExpense = (id) => {
//     dispatch({ type: "DELETE_EXPENSE", payload: id });
//   };

//   return (
//     <>
//       <h2 className="mainHeading">Expense Tracker</h2>
//       <div className="App">
//         <ExpenseForm addExpense={addExpense} />
//         <div className="expenseContainer">
//           <ExpenseInfo expenses={state.expenses} />
//           <ExpenseList
//             deleteExpense={deleteExpense}
//             expenses={state.expenses}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
import { useReducer } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });

  const addExpense = (expense) => {
    dispatch({ type: "ADD_EXPENSE", payload: { expense } });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm addExpense={addExpense} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList
            expenses={state.expenses}
            deleteExpense={deleteExpense}
          />
        </div>
      </div>
    </>
  );
}

export default App;
