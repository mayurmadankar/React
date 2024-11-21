import "./App.css";
import React from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import { useState } from "react";

const App = () => {
  // Create state for the expenses here
  const [expenses, setExpenses] = useState([]);

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        {/* Render expense form here */}
        <ExpenseForm />
        <div className="expenseContainer">
          {/* Render Expense Info here
            Render Expense List here */}
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </>
  );
};
export default App;
