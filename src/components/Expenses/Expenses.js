////This file serves as a wrapper function that takes input
import React, { useState } from 'react';

import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022')

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }

    //filter expense with right year
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;//check if it is desired Year
    });


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterChangeHandler={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses; 
//learning point 
//in javascript if the first condition of an if statment is met than it will automaticlly return the second condition