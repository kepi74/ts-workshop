interface Increment {
  type: 'INCREMENT'
}

interface Decrement {
  type: 'DECREMENT'
}

interface Reset {
  type: 'RESET'
}

type Action = Increment | Decrement | Reset

type State = number

const assertNever = (x: never): never => {
  throw new Error("Unexpected object x:" + JSON.stringify(x))
}
export const reducer1 = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'RESET':
      return 0
  }
}

export const reducer2 = (state: State, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'RESET':
      return 0
    default:
      return assertNever(action)
  }
}
