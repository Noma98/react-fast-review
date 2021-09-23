import React, { memo, useRef } from 'react';
import { connect } from 'react-redux';

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
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (name) => {
            dispatch({ type: 'CREATE', payload: { name } });
        }
    }
}
export default connect(null, mapDispatchToProps)(HabitAddForm);


