import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
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
        console.log("add form");
        return (
            <form ref={this.formRef} onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" placeholder="Habit" />
                <button>Add</button>
            </form>
        );
    }
}

export default HabitAddForm;