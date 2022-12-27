import React from 'react';

function TodoListItem({ name, isChecked, id, onCheck, onDelete }) {
  return (
    <li>
      <p className={isChecked ? 'checked' : ''}>{name}</p>
      <div>
        <button
          className={isChecked ? 'todo-not-ready' : 'todo-ready'}
          value={isChecked}
          type="checkbox"
          onClick={() => onCheck(id)}></button>
        <button className="todo-remove" onClick={() => onDelete(id)}></button>
      </div>
    </li>
  );
}

export default TodoListItem;
