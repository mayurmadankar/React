import { useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Logic to add expense here

    const expense = {
      id: new Date().getTime(),
      text: expenseTextInput.current.value,
      amount: parseFloat(expenseAmountInput.current.value)
    };

    props.onAddExpense(expense);

    // Clear input fields
    expenseTextInput.current.value = "";
    expenseAmountInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;
