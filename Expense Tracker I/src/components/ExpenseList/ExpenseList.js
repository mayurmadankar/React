import React from "react";
import styles from "./ExpenseList.module.css";

const ExpenseList = ({expenses}) => {

  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {/* Display transactions here */ }
        {expenses.map((expense, index) => (
          <Transaction key={index} expense={expense} index={index} />
        ))}
      </ul>
    </div>
  );
};
export default ExpenseList;
