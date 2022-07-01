import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "../NewExpenseFilter/ExpensesFilter";

const Expenses = (props) => {
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={props.selected} onSelectingFilter={props.onSelectingFilter}/>
                {props.items.map((expenses) => (
                    <ExpenseItem
                        key={expenses.id}
                        title={expenses.title}
                        amount={expenses.amount}
                        date={expenses.date}
                    />))}
            </Card>
        </div>
    );
}

export default Expenses;
