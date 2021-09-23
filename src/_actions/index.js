export const onIncrement = (habit) => {
    return { type: 'INCREMENT', payload: { habit } };
}
export const onDecrement = (habit) => {
    return { type: 'DECREMENT', payload: { habit } };
}
export const onDelete = (habit) => {
    return { type: 'DELETE', payload: { habit } };
}
export const onReset = () => {
    return { type: 'RESET' };
}
export const onAdd = (name) => {
    return { type: 'CREATE', payload: { name } };
}