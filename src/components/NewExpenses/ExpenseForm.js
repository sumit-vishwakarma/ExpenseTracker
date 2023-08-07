import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // we can also store data like this
  // const [enteredData, setEnteredData] = useState({
  //     inputTitle: '',
  //     inputAmount: '',
  //     inputData: ''
  // })

  const enteredAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
    // And update like this
    // setEnteredData((prevState) => {
    //     return setEnteredData({
    //         ...prevState,
    //         inputAmount: event.target.value
    //     })
    // })
  };

  const enteredTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const enteredDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // const inputHandler = (identifier, value) => {
  //     if(identifier == 'Title'){
  //         setEnteredTitle(value);
  //     }else if(identifier == 'Amount') {
  //         setEnteredAmount(value);
  //     }else {
  //         setEnteredDate(value);
  //     }
  // }
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: +enteredAmount,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={enteredTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={enteredAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={enteredDateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
