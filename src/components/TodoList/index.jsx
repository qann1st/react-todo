import React from 'react';
import AddTodo from './AddTodo';
import TodoListItem from './TodoListItem';

function TodoList() {
  const [todos, setTodos] = React.useState([
    { name: 'Убраться', isChecked: false },
    { name: 'Приготовить', isChecked: false },
    { name: 'Спать', isChecked: false },
  ]);

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

  return (
    <>
      <AddTodo addTodo={handleAddTodo} />
      <div className="todo-list">
        <div className="todo-list_info">
          <h2 className="todo-list__title">Список ToDo</h2>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <TodoListItem
              key={todo.name}
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
