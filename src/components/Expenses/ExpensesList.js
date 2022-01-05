import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = (props) => {
  let { expenses } = props;

  if (expenses.length === 0) {
    return <h2 className="expense-list__fallback">No Expenses Found</h2>;
  }

  return (
    <ul className="expense-list">
      {expenses.map((exp) => (
        <ExpenseItem
          key={exp.id}
          date={exp.date}
          title={exp.title}
          amount={exp.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
