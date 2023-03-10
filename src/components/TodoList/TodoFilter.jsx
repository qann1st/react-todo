import React from 'react';

function TodoFilter({ filter, setFilter }) {
  return (
    <div className="todo-filter">
      <h2 className="title">Фильтрация ToDo</h2>
      <div className="todo-filter__buttons">
        <button className={filter === 'ready' ? 'selected' : ''} onClick={() => setFilter('ready')}>
          Выполненные
        </button>
        <button className={filter === 'all' ? 'selected' : ''} onClick={() => setFilter('all')}>
          Все
        </button>
        <button
          className={filter === 'not-ready' ? 'selected' : ''}
          onClick={() => setFilter('not-ready')}>
          Невыполненные
        </button>
      </div>
    </div>
  );
}

export default TodoFilter;
