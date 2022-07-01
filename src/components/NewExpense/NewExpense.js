import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import AddNewExpense from "./AddNewExpense";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  const handleAddNewExpense = () => {
    setShowExpenseForm(true)
  }

  const handleCancelAddingNewExpense = () => {
    setShowExpenseForm(false)
  }

  return (
    <div className='new-expense'>
      {showExpenseForm && <ExpenseForm handleCancelAddingNewExpense={handleCancelAddingNewExpense} onSaveExpenseData={saveExpenseDataHandler} />}
      {!showExpenseForm && <AddNewExpense handleAddNewExpense={handleAddNewExpense}/>}

    </div>
  );
};

export default NewExpense;
