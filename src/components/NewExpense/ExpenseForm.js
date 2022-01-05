import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
//   const [input, setInput] = useState({
//     title: "",
//     amount: "",
//     date: "",
//   });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setInput((prevState) => {
    //   return {
    //     ...prevState,
    //     title: event.target.value,
    //   }
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setInput((prevState) => {
    //     return {
    //       ...prevState,
    //       amount: event.target.value,
    //     }
    //   });
  };

  const dateChangeHandler = (event) => {
      console.log(event.target.value);
    setDate(event.target.value);
    // setInput((prevState) => {
    //     return {
    //       ...prevState,
    //       date: event.target.value,
    //     }
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: title,
        amount: amount,
        date: new Date(date),
    }
    props.onSaveExpenseData(expenseData); // pass this up to NewExpense then to App
    setTitle('');
    setAmount('');
    setDate('');
};

  return (
    <form onSubmit={submitHandler} >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
