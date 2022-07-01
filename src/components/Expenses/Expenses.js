import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "../NewExpenseFilter/ExpensesFilter";
import Chart from "../Chart/Chart";

const Expenses = (props) => {
    const dataPoints = [
        {'label': 'Jan', 'value': 0},
        {'label': 'Feb', 'value': 0},
        {'label': 'Mar', 'value': 0},
        {'label': 'Apr', 'value': 0},
        {'label': 'May', 'value': 0},
        {'label': 'Jun', 'value': 0},
        {'label': 'Jul', 'value': 0},
        {'label': 'Aug', 'value': 0},
        {'label': 'Sep', 'value': 0},
        {'label': 'Oct', 'value': 0},
        {'label': 'Nov', 'value': 0},
        {'label': 'Dec', 'value': 0},
    ]
    props.items.forEach(item => {
        dataPoints[item.date.getMonth()].value+=item.amount})

    const eachMonthExpense = dataPoints.map(dataPoint => dataPoint.value)
    const maximumExpenseOfTheYear = Math.max(...eachMonthExpense)
    return (
        <div>
            <Chart dataPoints={dataPoints} maxValue={maximumExpenseOfTheYear}/>
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
