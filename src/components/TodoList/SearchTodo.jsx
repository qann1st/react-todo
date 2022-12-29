import React from 'react';

function SearchTodo({ setValueInput }) {
  function handleSubmit(e) {
    e.preventDefault();
    setValueInput('');
    setValueInput(e.target.value);
  }

  return (
    <div className="todo-search">
      <h1 className="todo-list__title">Поиск ToDo</h1>
      <form className="new-todo_form" onSubmit={handleSubmit}>
        <input
          className="todo-search_input"
          type="text"
          placeholder="Что хотите найти?"
          onChange={(e) => setValueInput(e.target.value)}
          required
        />
      </form>
    </div>
  );
}

export default SearchTodo;
