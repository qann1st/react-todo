import React from 'react';

function SearchTodo({ valueInput, setValueInput }) {
  return (
    <div className="todo-search">
      <h2 className="title">Поиск задач</h2>
      <form className="new-todo_form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="todo-search_input"
          type="text"
          placeholder="Что хотите найти?"
          value={valueInput}
          onChange={(e) => {
            setValueInput(...e.target.value.matchAll(/[A-Za-zА-Яа-яЁё0-9.!?:; ]*/g));
          }}
          required
        />
      </form>
    </div>
  );
}

export default SearchTodo;
