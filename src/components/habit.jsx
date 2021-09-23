import React, { memo } from 'react';
import styles from './habit.module.css';
import { connect } from 'react-redux';

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

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (habit) => {
            dispatch({ type: 'INCREMENT', payload: { habit } })
        },
        onDecrement: (habit) => {
            dispatch({ type: 'DECREMENT', payload: { habit } })
        },
        onDelete: (habit) => {
            dispatch({ type: 'DELETE', payload: { habit } })
        },
    }
}
export default connect(null, mapDispatchToProps)(Habit);
