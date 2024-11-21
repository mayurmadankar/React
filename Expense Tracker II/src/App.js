import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Create function to add an expense

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  // Create function to delete an expense

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm onAddExpense={addExpense} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList onDeleteExpense={deleteExpense} expenses={expenses} />
        </div>
      </div>
    </>
  );
}

export default App;
