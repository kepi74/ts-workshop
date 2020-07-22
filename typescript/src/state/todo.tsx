import React from 'react'

interface Todo {
  id: string
  text: string
}

interface State {
  todos?: Todo[]
  loading: boolean
  error?: string
}

interface Action {
  type: string
  todos?: Todo[]
  error?: string
}

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    case 'DATA':
      return {
        todos: action.todos ? action.todos : [],
        loading: false,
      }
    case 'ERROR':
      return {
        todos: undefined,
        loading: false,
        error: 'error msg',
      }
    default:
      return state
  }
}

export const TodoComponent = () => {
  const [state] = React.useReducer(reducer, { loading: false })
  if (state.loading) {
    return <div>Loading</div>
  }
  if (state.error) {
    return <div>{state.error}</div>
  }
  if (state.todos) {
    return <div>Tada! ToDos</div>
  }
}
