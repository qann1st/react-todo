import React from 'react';

function TodoListItem() {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <li>
      <p>Название ToDo</p>
      <div>
        <input type="checkbox" />
        <button>Удалить</button>
      </div>
    </li>
  );
}

export default TodoListItem;
