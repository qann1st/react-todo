import React from 'react';

function AddTodo({ addTodo }) {
  const [valueInput, setValueInput] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(valueInput);
    setValueInput('');
  }

  return (
    <div className="new-todo">
      <h1 className="todo-list__title">Новая задача</h1>
      <form className="new--todo" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
          type="text"
          placeholder="Задача"
          required
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default AddTodo;
