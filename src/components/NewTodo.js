import React, { useState } from 'react';

import { useAddTodo } from '../hooks/useAddTodo';
import { useFlasher } from '../utils';

const NewTodo = () => {
  const addTodo = useAddTodo();
  const [text, setText] = useState('');
  return (
    <li ref={useFlasher()}>
      <input className={'input-todo'}
        value={text}
        placeholder="Scrivi la descrizione..."
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(text);
          setText('');
        }}
      >
        Aggiungi
      </button>
    </li>
  );
};

export default React.memo(NewTodo);
