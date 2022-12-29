import React from 'react';

function TodoListItem({ name, isChecked, id, onCheck, onDelete }) {
  return (
    <li className="todo-list_list_element">
      <p className={isChecked ? 'checked' : ''}>{name}</p>
      <div className="todo-list_list_element-nav">
        <button
          className={
            isChecked ? 'todo-list_list_element-not-completed' : 'todo-list_list_element-completed'
          }
          value={isChecked}
          type="checkbox"
          onClick={() => onCheck(id)}></button>
        <button className="todo-list_list_element-remove" onClick={() => onDelete(id)}></button>
      </div>
    </li>
  );
}

export default TodoListItem;
