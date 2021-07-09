import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            {
                count: 0,
                id: 1,
                name: "Reading",
            },
            {
                count: 0,
                id: 2,
                name: "Running",
            },
            {
                count: 0,
                id: 3,
                name: "Coding",
            }
        ],
    };
    handleIncrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++; //💩
        this.setState({ habits });
    }
    handleDecrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count > 0 ? count : 0;//💩
        this.setState({ habits });
    }
    handleDelete = (habit) => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({ habits });
    }
    render() {
        return (
            <div className="habits">
                <form>
                    <input type="text" placeholder="Habit" />
                    <input type="submit" value="Add" />
                </form>
                <ul>
                    {this.state.habits.map(habit => {
                        return <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                        />
                    })}
                </ul>
                <button>Reset All</button>
            </div>
        );
    }
}

export default Habits;