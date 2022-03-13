import React from 'react';

import { useQuery } from '../hooks/useQuery';
import { useDeleteTodo } from '../hooks/useDeleteTodo';
import { useToggleTodo } from '../hooks/useToggleTodo';
import { useFlasher } from '../utils';

const renderHighlight = (title, query) => {
  if (!query) return title;
  const index = title.indexOf(query);
  if (index === -1) return title;
  return (
    <React.Fragment>
      {title.slice(0, index)}
      <span className={'evidenzia'}>{query}</span>
      {title.slice(index + query.length)}
    </React.Fragment>
  );
};

const TodoItem = ({ id, title, completed }) => {
  const { getQuery } = useQuery();
  const deleteTodo = useDeleteTodo();
  const toggleTodo = useToggleTodo();
  return (
    <li ref={useFlasher()}>
      <input
        type="checkbox"
        checked={!!completed}
        onChange={() => toggleTodo(id)}
      />
      <span className={'task-description'}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {completed ? title : renderHighlight(title, getQuery())}
      </span>
      <button onClick={() => deleteTodo(id)}>Cancella</button>
    </li>
  );
};

export default React.memo(TodoItem);
