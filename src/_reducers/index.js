import { combineReducers } from 'redux';

const initialState = [
    { count: 0, id: 1, name: "Reading" },
    { count: 0, id: 2, name: "Running" },
    { count: 0, id: 3, name: "Coding" }
];
const habitsReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'CREATE':
            return [...state, { name: action.payload.name, count: 0, id: Date.now() }];
        case 'INCREMENT':
            return state.map(item => {
                if (item.id === action.payload.habit.id) {
                    return { ...item, count: item.count + 1 };
                }
                return item;
            });
        case 'DECREMENT':
            return state.map(item => {
                if (item.id === action.payload.habit.id) {
                    let count = item.count - 1 < 0 ? 0 : item.count - 1;
                    return { ...item, count }
                }
                return item;
            })
        case 'DELETE':
            return state.filter(item => item.id !== action.payload.habit.id);
        case 'RESET':
            return state.map(item => {
                if (item.count !== 0) {
                    return { ...item, count: 0 };
                }
                return item;
            })
        default:
            return state;
    }
}
export default combineReducers({
    habits: habitsReducer,
})
