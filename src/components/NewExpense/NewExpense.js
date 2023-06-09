import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import { useState } from 'react';


function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    //generates a unqie id for one item 
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData, //this is the final const name, amount, date generated by each iteration in Expenseform.js 
            id: Math.random().toString()
        };
        props.onAddExpenseHandler(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }


    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    );
};

export default NewExpense;











//I have been coding for 7hours ;((((( welp