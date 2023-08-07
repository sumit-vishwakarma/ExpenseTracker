import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    let expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const isEditingHandler = () => {
    setIsEditing(prev=>!prev);
  }

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={isEditingHandler}/>
      ) : (
        <button onClick={isEditingHandler}>Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
