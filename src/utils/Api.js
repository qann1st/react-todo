class Api {
  constructor({ baseUrl, ...options }) {
    this._baseUrl = baseUrl;
    this._options = options;
  }

  async _fetch(path, method = 'GET', body) {
    const opt = { ...this._options, method };
    if (body)
      if (typeof body === 'string') opt.body = body;
      else opt.body = JSON.stringify(body);

    const response = await fetch(this._baseUrl + path, opt);
    const json = await response.json();

    if (response.ok) return json;

    throw new Error(json.message);
  }

  getTodos() {
    return this._fetch('/TodoList');
  }

  addTodo(todo) {
    return this._fetch('/TodoList', 'POST', todo);
  }

  removeTodo(todo) {
    return this._fetch(`/TodoList/${todo.id}`, 'DELETE');
  }

  editTodo(todo) {
    return this._fetch(`/TodoList/${todo.id}`, 'PUT', { name: todo.name });
  }

  toggleChecked(todo) {
    return this._fetch(`/TodoList/${todo.id}`, 'PUT', { isChecked: !todo.isChecked });
  }
}

export const api = new Api({
  baseUrl: 'https://63c00660e262345656f5ca31.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
});
