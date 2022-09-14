import React, { useState } from 'react'
import './ExpenseForm.css';

export default function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmmount, setEnteredAmmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const ammountChangeHandler = (event) => {
        setEnteredAmmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        // const expenseData = {
        //     title: enteredTitle,
        //     ammount: enteredAmmount,
        //     date: new Date(enteredDate)
        // };

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmmount,
            date: new Date(enteredDate),
          };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmmount('');
        setEnteredDate('');
    };


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title </label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__controls'>
                    <label>Ammount </label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmmount}
                        onChange={ammountChangeHandler}
                    />
                </div>
                <div className='new-expense__controls'>
                    <label>Date </label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}>
                    </input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
