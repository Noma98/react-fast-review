import React, { Component } from 'react';

class HabitAddForm extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = (e) => {
        e.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        //this.inputRef.current.value = "";
        this.formRef.current.reset();
    }
    render() {
        return (
            <form ref={this.formRef} onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" placeholder="Habit" />
                <button>Add</button>
            </form>
        );
    }
}

export default HabitAddForm;