import React, { Component } from 'react';

class Habit extends Component {
    state = {
        name: "Reading",
        count: 0,
    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
    handleDecrement = () => {
        const count = this.state.count - 1;
        this.setState({ count: count > 0 ? count : 0 });
    }
    render() {
        return (
            <li>
                <span className="habit-name">{this.state.name}</span>
                <span className="habit-count">{this.state.count}</span>
                <button onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;