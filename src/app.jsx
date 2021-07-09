import './app.css';

import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
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
  handleAdd = (name) => {
    const habits = [...this.state.habits, { name, count: 0, id: Date.now() }];
    this.setState({ habits });
  }
  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(habit => habit.count > 0).length} />
        <Habits habits={this.state.habits} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} handleAdd={this.handleAdd} />
      </>
    );
  }
}

export default App;

