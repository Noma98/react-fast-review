import React from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';
import styles from './habits.module.css';
import { connect } from 'react-redux';
import { onReset } from '../_actions';

const Habits = ({ habits, onReset }) => {
    return (
        <div className={styles.habits}>
            <HabitAddForm />
            <ul>
                {habits.map(habit => {
                    return <Habit
                        key={habit.id}
                        habit={habit}
                    />
                })}
            </ul>
            <button className={styles.btn} onClick={onReset}>Reset All</button>
        </div>
    );
};
const mapStateToProps = (state) => {
    return { habits: state.habits }
}

export default connect(mapStateToProps, { onReset })(Habits);