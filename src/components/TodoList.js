import React from 'react';

import { useTodoList } from '../hooks/useTodoList';
import { useQuery } from '../hooks/useQuery';
import TodoItem from './TodoItem';
import NewTodo from './NewTodo';

const TodoList = () => {
  const { getQuery, setQuery } = useQuery();
  const todos = useTodoList();
  return (
    <div>
        <h1 className={'app-title'}>ToDo App - Test per gli hooks</h1>
      <ul>
        {todos.map(({ id, title, completed }) => (
          <TodoItem key={id} id={id} title={title} completed={completed} />
        ))}
        <NewTodo />
      </ul>
      <div className={'container-evidenzia'}>
        Evidenzia nella lista:
        <input className={'input-query'} value={getQuery()} onChange={e => setQuery(e.target.value)} />
      </div>
    </div>
  );
};

export default TodoList;
