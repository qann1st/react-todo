import React from 'react';
import AddTodo from './AddTodo';
import SearchTodo from './SearchTodo';
import TodoFilter from './TodoFilter';
import TodoListItem from './TodoListItem';

function TodoList() {
  const [todos, setTodos] = React.useState([
    { name: 'Убраться', isChecked: false },
    { name: 'Приготовить', isChecked: false },
    { name: 'Спать', isChecked: false },
  ]);

  const [filter, setFilter] = React.useState('all');

  const [valueInput, setValueInput] = React.useState('');

  console.log(valueInput);

  function handleCheck(id) {
    setTodos(
      todos.map((todo, index) => {
        if (index === id) {
          return { ...todo, isChecked: !todo.isChecked };
        }
        return todo;
      }),
    );
  }

  function handleDelete(id) {
    setTodos(todos.filter((_, index) => index !== id));
  }

  function handleAddTodo(name) {
    setTodos([...todos, { name, isChecked: false }]);
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
          {valueInput === ''
            ? getFilteredTodos().map((todo, index) => (
                <TodoListItem
                  key={index}
                  {...todo}
                  id={index}
                  onCheck={handleCheck}
                  onDelete={handleDelete}
                />
              ))
            : getSearchTodos().map((todo, index) => (
                <TodoListItem
                  key={index}
                  {...todo}
                  id={index}
                  onCheck={handleCheck}
                  onDelete={handleDelete}
                />
              ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
