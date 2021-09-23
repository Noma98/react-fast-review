
import React, { memo } from 'react';
import { connect } from 'react-redux';

const Navbar = memo(({ totalCount }) => {
    return (
        <header>
            <i className="fas fa-leaf"></i>
            <span>Habit Tracker</span>
            <span>{totalCount}</span>
        </header>
    );
});
const mapStateToProps = (state) => {
    return { totalCount: state.habits.filter(item => item.count !== 0).length };
}

export default connect(mapStateToProps)(Navbar);