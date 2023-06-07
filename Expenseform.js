import React, { useState } from 'react';
import './Expenseform.css'
function ExpenseForm({ onAddExpense }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setEnteredTitle(newTitle);
    console.log('Title:', newTitle);
  }

  function handleAmountChange(event) {
    const newAmount = event.target.value;
    setEnteredAmount(newAmount);
    console.log('Amount:', newAmount);
  }

  function handleDateChange(event) {
    const newDate = event.target.value;
    setEnteredDate(newDate);
    console.log('Date:', newDate);
  }

  function submitHandler(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    onAddExpense(expenseData); // Call the onAddExpense prop with the expenseData
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Expense Title"
          value={enteredTitle}
          onChange={handleTitleChange}
        />
        <input
          type="number"
          placeholder="Expense Amount"
          value={enteredAmount}
          onChange={handleAmountChange}
        />
        <input
          type="date"
          value={enteredDate}
          onChange={handleDateChange}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
