import React from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';
import styles from './habits.module.css';

const Habits = ({ habits, onAdd, onIncrement, onReset, onDecrement, onDelete }) => {
    return (
        <div className={styles.habits}>
            <HabitAddForm onAdd={onAdd} />
            <ul>
                {habits.map(habit => {
                    return <Habit
                        key={habit.id}
                        habit={habit}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                    />
                })}
            </ul>
            <button className={styles.btn} onClick={onReset}>Reset All</button>
        </div>
    );
};

export default Habits;