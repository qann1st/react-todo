import React from 'react';
import uuid from 'react-uuid';
import AddTodo from './AddTodo';
import SearchTodo from './SearchTodo';
import TodoFilter from './TodoFilter';
import TodoListItem from './TodoListItem';

function TodoList() {
  const [todos, setTodos] = React.useState([]);
  const [filter, setFilter] = React.useState('all');
  const [valueInput, setValueInput] = React.useState('');
  const [currentTodo, setCurrentTodo] = React.useState(null);

  function handleCheck(id) {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, isChecked: !todo.isChecked };
        }
        return todo;
      }),
    );
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleAddTodo(name) {
    setTodos([...todos, { name, id: uuid(), isChecked: false }]);
  }

  function getFilteredTodos() {
    if (filter === 'all') {
      return todos;
    }
    if (filter === 'ready') {
      return todos.filter((todo) => todo.isChecked);
    }
    if (filter === 'not-ready') {
      return todos.filter((todo) => !todo.isChecked);
    }
  }

  function getSearchTodos() {
    if (valueInput === '') {
      return todos;
    } else if (valueInput !== '') {
      return todos.filter((todo) => valueInput === todo.name);
    }
  }

  function handleDragStart(todo) {
    setCurrentTodo(todo);
  }

  function handleDrop(isTop, todo) {
    const newTodos = todos.filter((e) => e.id !== currentTodo.id);
    newTodos.some((e, index) => {
      if (e.id === todo.id) {
        setTodos([
          ...newTodos.slice(0, index + isTop),
          currentTodo,
          ...newTodos.slice(index + isTop, newTodos.length),
        ]);
        return true;
      }
      return false;
    });
  }

  return (
    <>
      <AddTodo addTodo={handleAddTodo} />
      <SearchTodo setValueInput={setValueInput} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <div className="todo-list">
        <div className="todo-list_info">
          <h2 className="todo-list__title">Список ToDo</h2>
        </div>
        <ul className="todo-list_list">
          {todos.length !== 0 ? (
            valueInput === '' ? (
              getFilteredTodos().map((todo) => (
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                  onCheck={handleCheck}
                  onDelete={handleDelete}
                  onDragStart={handleDragStart}
                  onDrop={handleDrop}
                />
              ))
            ) : (
              getSearchTodos().map((todo) => (
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                  onCheck={handleCheck}
                  onDelete={handleDelete}
                  onDragStart={handleDragStart}
                  onDrop={handleDrop}
                />
              ))
            )
          ) : (
            <p>Пока задач нет</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
