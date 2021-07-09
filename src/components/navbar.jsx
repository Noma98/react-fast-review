import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <header>
                <i className="fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span>{this.props.totalCount}</span>
            </header>
        );
    }
}

export default Navbar;