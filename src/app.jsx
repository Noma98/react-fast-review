import './app.css';

import React, { useCallback, useEffect, useState } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

const App = () => {
  const [habits, setHabits] = useState([
    { count: 0, id: 1, name: "Reading" },
    { count: 0, id: 2, name: "Running" },
    { count: 0, id: 3, name: "Coding" }
  ]);

  const handleIncrement = useCallback(habit => {
    setHabits(habits =>
      habits.map(item => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      })
    );
  }, []);

  const handleDecrement = useCallback(habit => {
    setHabits(habits =>
      habits.map(item => {
        if (item.id === habit.id) {
          const count = habit.count - 1;
          return { ...habit, count: count > 0 ? count : 0 };
        }
        return item;
      })
    );
  }, []);

  const handleDelete = useCallback(habit => {
    setHabits(habits => habits.filter(item => item.id !== habit.id));
  }, []);

  const handleAdd = useCallback((name) => {
    setHabits(habits => [...habits, { name, count: 0, id: Date.now() }]);
  }, []);

  const handleReset = useCallback(() => {
    setHabits(habits =>
      habits.map(habit => {
        if (habit.count !== 0) {
          return { ...habit, count: 0 };
        }
        return habit;
      })
    );
  }, []);

  return (
    <>
      <Navbar totalCount={habits.filter(habit => habit.count > 0).length} />
      <Habits habits={habits} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} onAdd={handleAdd} onReset={handleReset} />
    </>
  );
};

export default App;
