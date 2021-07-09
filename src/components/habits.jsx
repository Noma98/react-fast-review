import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {

    render() {
        return (
            <>
                <HabitAddForm onAdd={this.props.handleAdd} />
                <ul>
                    {this.props.habits.map(habit => {
                        return <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement}
                            onDelete={this.props.onDelete}
                        />
                    })}
                </ul>
                <button>Reset All</button>
            </>
        );
    }
}

export default Habits;