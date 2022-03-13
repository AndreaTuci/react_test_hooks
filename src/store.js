import { useState, useCallback } from 'react';
import { createContainer } from 'react-tracked';
import produce from 'immer';

const initialState = {
  todos: [
    { id: 1, title: 'Finire di scrivere TelegramBot' },
    { id: 2, title: 'Scrivere SPA con autenticazione' },
    { id: 3, title: 'Fissa il campeggio' },
  ],
  query: '',
};

const useValue = () => useState(initialState);

const { Provider, useTrackedState, useUpdate: useSetState } = createContainer(
  useValue,
);

const useSetDraft = () => {
  const setState = useSetState();
  return useCallback(
    draftUpdater => {
      setState(produce(draftUpdater));
    },
    [setState],
  );
};

export { Provider, useTrackedState, useSetDraft };
