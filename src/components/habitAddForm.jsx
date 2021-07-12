import React, { memo, useRef } from 'react';

const HabitAddForm = memo(({ onAdd }) => {
    const formRef = useRef();
    const inputRef = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && onAdd(name);
        //inputRef.current.value = "";
        formRef.current.reset();
    };

    return (
        <form ref={formRef} onSubmit={onSubmit}>
            <input ref={inputRef} type="text" placeholder="Habit" />
            <button>Add</button>
        </form>
    );
});
export default HabitAddForm;


