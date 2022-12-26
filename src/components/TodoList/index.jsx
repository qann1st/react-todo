import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList() {
  return (
    <div className="todo-list">
      <div className="todo-list_info">
        <h2 className="todo-list__title">Список ToDo</h2>
      </div>
      <ul>
        <TodoListItem />
      </ul>
    </div>
  );
}

export default TodoList;
