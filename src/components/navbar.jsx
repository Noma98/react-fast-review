
import React, { memo } from 'react';

const Navbar = memo(({ totalCount }) => {
    return (
        <header>
            <i className="fas fa-leaf"></i>
            <span>Habit Tracker</span>
            <span>{totalCount}</span>
        </header>
    );
});

export default Navbar;