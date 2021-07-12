import React from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

const Habits = ({ habits, handleAdd, onIncrement, onReset, onDecrement, onDelete }) => {
    console.log("habits");
    return (
        <>
            <HabitAddForm onAdd={handleAdd} />
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
            <button onClick={onReset}>Reset All</button>
        </>
    );
};

export default Habits;