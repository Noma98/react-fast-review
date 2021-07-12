
import React, { memo } from 'react';

const Navbar = memo(({ totalCount }) => {
    console.log("navbar");
    return (
        <header>
            <i className="fas fa-leaf"></i>
            <span>Habit Tracker</span>
            <span>{totalCount}</span>
        </header>
    );
});

export default Navbar;