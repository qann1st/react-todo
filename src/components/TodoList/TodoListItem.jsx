import React from 'react';

function TodoListItem({ todo, onCheck, onDelete, onDragStart, onDrop, onEditTodo }) {
  const [isTop, setIsTop] = React.useState(0);
  const [btnEditIsOpened, setBtnEditIsOpened] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onEditTodo(todo, inputValue);
    setBtnEditIsOpened(false);
  }

  return (
    <li
      className="todo-list_list_element"
      draggable="true"
      onDragOver={(e) => {
        e.preventDefault();
        const { top, bottom } = e.target.getBoundingClientRect();
        setIsTop(e.clientY > (top + bottom) / 2 ? 1 : 0);
        e.target.style = !isTop ? 'border-top: 1px solid red' : 'border-bottom: 1px solid red';
      }}
      onDragLeave={(e) => {
        e.target.style = undefined;
      }}
      onDragStart={() => onDragStart(todo)}
      onDrop={(e) => {
        e.target.style = undefined;
        onDrop(isTop, todo);
      }}>
      {btnEditIsOpened ? (
        <form onSubmit={handleSubmit}>
          <input
            className="todo-list_list_element_input"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            required
          />
        </form>
      ) : (
        <p className={todo.isChecked ? 'checked' : ''}>{todo.name}</p>
      )}
      <div className="todo-list_list_element-nav">
        <button
          className="todo-list_list_element_edit"
          onClick={() => {
            setInputValue(todo.name);
            setBtnEditIsOpened(!btnEditIsOpened);
          }}></button>
        <button
          className={
            todo.isChecked
              ? 'todo-list_list_element-not-completed'
              : 'todo-list_list_element-completed'
          }
          value={todo.isChecked}
          type="checkbox"
          onClick={() => onCheck(todo)}></button>
        <button className="todo-list_list_element-remove" onClick={() => onDelete(todo)}></button>
      </div>
    </li>
  );
}

export default TodoListItem;
