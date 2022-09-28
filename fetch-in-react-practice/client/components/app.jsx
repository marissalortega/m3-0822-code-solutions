import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('api/todos', {
      method: 'GET',
      headers: {
        Accept: '*/*'
      }
    })
      .then(res => res.json())
      .then(todos => {
        this.setState({ todos });
      })
      .catch(err => console.error('Fetch failed!', err));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(todo => {
        const todosArrayCopy = [...this.state.todos];
        this.setState({ todos: todosArrayCopy.concat(todo) });
      })
      .catch(err => console.error('Fetch failed!', err));
  }

  toggleCompleted(todoId) {
    const index = this.state.todos.map(todo => todo.todoId).indexOf(todoId);

    const isCompletedStatus = this.state.todos[index].isCompleted;

    const newObj = {
      isCompleted: !isCompletedStatus
    };

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify(newObj),
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(todo => {
        const todosArrayCopy = [...this.state.todos];

        todosArrayCopy[index] = todo;

        this.setState({ todos: todosArrayCopy });

      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
