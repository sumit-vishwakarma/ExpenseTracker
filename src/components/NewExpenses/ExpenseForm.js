import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [enteredData, setEnteredData] = useState({
    //     inputTitle: '',
    //     inputAmount: '',
    //     inputData: ''
    // })

    const enteredAmountHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setEnteredData((prevState) => {
        //     return setEnteredData({
        //         ...prevState,
        //         inputAmount: event.target.value
        //     })
        // })
    }

    const enteredTitleHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const enteredDateHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const inputHandler = (identifier, value) => {
        if(identifier == 'Title'){
            setEnteredTitle(value);
        }else if(identifier == 'Amount') {
            setEnteredAmount(value);
        }else {
            setEnteredDate(value);
        }
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={(event) => inputHandler('Title', event.target.value)}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' onChange={(event) => inputHandler('Amount', event.target.value)}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max='2022-12-31' onChange={(event) => inputHandler('Value', event.target.value)}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;
