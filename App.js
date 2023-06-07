import React, { useState } from 'react';
import ExpenseForm from './Expenseform';

function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpenseHandler(expenseData) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expenseData];
    });
  }

  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      {/* Render expenses */}
      {expenses.map((expense) => (
        <div key={expense.title}>
          <h3>{expense.title}</h3>
          <p>Amount: ${expense.amount}</p>
          <p>Date: {expense.date.toISOString()}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
