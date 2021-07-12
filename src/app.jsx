import './app.css';

import React, { useCallback, useState } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

const App = (props) => {
  const [habits, setHabits] = useState([
    {
      count: 0,
      id: 1,
      name: "Reading",
    },
    {
      count: 0,
      id: 2,
      name: "Running",
    },
    {
      count: 0,
      id: 3,
      name: "Coding",
    }
  ]);

  const handleIncrement = useCallback((habit) => {
    const habits = habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    })
    setHabits(habits);
  });

  const handleDecrement = useCallback((habit) => {
    const habits = habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count > 0 ? count : 0 };
      }
      return item;
    })
    setHabits(habits);
  });

  const handleDelete = (habit) => {
    const habits = habits.filter(item => item.id !== habit.id);
    setHabits(habits);
  }

  const handleAdd = (name) => {
    const habits = [...habits, { name, count: 0, id: Date.now() }];
    setHabits(habits);
  }

  const handleReset = () => {
    const habits = habits.map(item => {
      if (item.count === 0) {
        return item;
      }
      return { ...item, count: 0 };
    })
    setHabits(habits);
  }
  console.log("App");
  return (
    <>
      <Navbar totalCount={habits.filter(habit => habit.count > 0).length} />
      <Habits habits={habits} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} handleAdd={handleAdd} onReset={handleReset} />
    </>
  );
};

export default App;
