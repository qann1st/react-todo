import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './scss/app.scss';

function App() {
  return (
    <div className="content">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
