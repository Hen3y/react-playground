import React, { Component } from 'react';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface IState {
  todos: Todo[];
}

export class ClassComponent extends Component<Record<string, unknown>, IState> {
  constructor(props: Readonly<Record<string, unknown>>) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({ todos: json });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { todos } = this.state;

    return todos.length === 0 ? (
      <p>Loading</p>
    ) : (
      <pre style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
        {new todosStringConverter(todos).result}
      </pre>
    );
  }
}

class todosStringConverter {
  private readonly todos: string;

  constructor(todos: Todo[]) {
    this.todos = this.process(todos);
  }

  private process(todos: Todo[]) {
    return todos.reduce((prev: string, current: Todo) => `${prev}\n${JSON.stringify(current)}`, '');
  }

  get result() {
    return this.todos;
  }
}
