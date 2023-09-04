import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => {

    if(props.items.length === 0 ) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
    <ul className="expenses-list">
        {props.items.map((expense) => (
            <ExpenseItem
            //key is what makes each expense ne rastin tone unique. do te sherbeje te mbaje rradhen ne list
            // dhe identifikim e cdo expense qe do te shtohet nga expenseform. sherben me shum per te pare  cfare ndodh
            //behind the scenes por gjithashtu do te te sherbeje moste krijuar bugs
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            /> 
        ))}
    </ul>
    )
};

export default ExpensesList;