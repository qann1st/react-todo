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
      <h2 className="title">Добавить ToDo</h2>
      <form className="new-todo_form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setValueInput(...e.target.value.matchAll(/[A-Za-zА-Яа-яЁё0-9.!?:;]*/g));
          }}
          className="new-todo_input"
          value={valueInput}
          type="text"
          placeholder="Задача"
          required
        />
        <button className="new-todo_button" type="submit"></button>
      </form>
    </div>
  );
}

export default AddTodo;
