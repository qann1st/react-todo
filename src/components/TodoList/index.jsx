import React from 'react';
import AddTodo from './AddTodo';
import SearchTodo from './SearchTodo';
import TodoFilter from './TodoFilter';
import TodoListItem from './TodoListItem';
import { api } from '../../utils/Api';

function TodoList() {
  const [todos, setTodos] = React.useState([]);
  const [filter, setFilter] = React.useState('all');
  const [valueInput, setValueInput] = React.useState('');
  const [currentTodo, setCurrentTodo] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    api
      .getTodos()
      .then((arr) => setTodos(arr.reverse()))
      .finally(() => setIsLoading(false));
  }, []);

  function handleCheck(todo) {
    api.toggleChecked(todo).then((newTodo) =>
      setTodos(
        todos.map((todo) => {
          if (newTodo.id === todo.id) {
            return newTodo;
          }
          return todo;
        }),
      ),
    );
  }

  function handleDelete(todo) {
    api
      .removeTodo(todo)
      .then((removedTodo) => setTodos(todos.filter((element) => removedTodo.id !== element.id)));
  }

  function handleAddTodo(name) {
    api.addTodo({ name, isChecked: false }).then((todo) => setTodos([todo, ...todos]));
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
      return getFilteredTodos();
    } else {
      return getFilteredTodos().filter((todo) => new RegExp(valueInput, 'ig').test(todo.name));
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

  const searchTodos = getSearchTodos();

  return (
    <>
      <AddTodo addTodo={handleAddTodo} />
      <SearchTodo setValueInput={setValueInput} valueInput={valueInput} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <div className="todo-list">
        <div className="todo-list_info">
          <h2 className="todo-list__title">Список ToDo</h2>
        </div>
        <ul className="todo-list_list">
          {isLoading ? (
            <p>Загрузка...</p>
          ) : searchTodos.length !== 0 ? (
            searchTodos.map((todo) => (
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
            <p>{valueInput !== '' ? 'Таких ToDo нет' : 'Пока задач нет'}</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
