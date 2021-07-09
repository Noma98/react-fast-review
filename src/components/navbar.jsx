import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        console.log("navbar");
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