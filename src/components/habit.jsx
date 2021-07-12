import React, { memo } from 'react';

const Habit = memo(({ habit, onIncrement, onDecrement, onDelete }) => {
    const { name, count } = habit;
    const handleIncrement = () => {
        onIncrement(habit);
    }
    const handleDecrement = () => {
        onDecrement(habit);
    }
    const handleDelete = () => {
        onDelete(habit);
    }
    console.log("habit : ", name);
    return (
        <li>
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button onClick={handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
    );
});

export default Habit;
