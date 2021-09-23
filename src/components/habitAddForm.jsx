import React, { memo, useRef } from 'react';
import { connect } from 'react-redux';
import { onAdd } from '../_actions';

const HabitAddForm = memo(({ onAdd }) => {
    const formRef = useRef();
    const inputRef = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && onAdd(name);
        formRef.current.reset();
    };

    return (
        <form ref={formRef} onSubmit={onSubmit}>
            <input ref={inputRef} type="text" placeholder="Habit" />
            <button>Add</button>
        </form>
    );
});
export default connect(null, { onAdd })(HabitAddForm);


