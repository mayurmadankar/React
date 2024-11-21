import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
  // Add logic here to calculate the grand total, profit and expense amount here
  const income = props.expenses
    .filter((exp) => exp.amount > 0)
    .reduce((sum, exp) => sum + exp.amount, 0);
  const expense = props.expenses
    .filter((exp) => exp.amount < 0)
    .reduce((sum, exp) => sum + exp.amount, 0);
  const balance = income + expense;

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>
          ${/* Grand total should be displayed here */ balance.toFixed(2)}
        </h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +$
            {
              /*Total Profit Amount should be displayed here */ income.toFixed(
                2
              )
            }
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -$
            {
              /* Total expense amount should be displayed here */ Math.abs(
                expense
              ).toFixed(2)
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
