import React, { memo } from 'react';
import styles from './habit.module.css';
import { connect } from 'react-redux';
import { onIncrement, onDecrement, onDelete } from '../_actions';
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
    return (
        <li>
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className={styles.btn} onClick={handleIncrement}>
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

export default connect(null, { onIncrement, onDecrement, onDelete })(Habit);
