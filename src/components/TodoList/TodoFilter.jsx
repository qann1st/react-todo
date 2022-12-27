import React from 'react';

function TodoFilter({ setFilter }) {
  return (
    <div className="todo-filter">
      <button onClick={() => setFilter('ready')}>Выполненные</button>
      <button onClick={() => setFilter('all')}>Все</button>
      <button onClick={() => setFilter('not-ready')}>Невыполненные</button>
    </div>
  );
}

export default TodoFilter;
