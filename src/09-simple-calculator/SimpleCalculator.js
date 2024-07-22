import { useReducer } from 'react';

const initialState = {
  num1 : 0,
  num2 : 0,
  result: 'No Result',
}

function reducer (state, action) {
  switch (action.type) {
    case "NUMBER1": {
      return {
        ...state,
        num1: action.payload.number,
      }
    }
    case "NUMBER2": {
      return {
        ...state,
        num2: action.payload.number,
      }
    }

    case "ADDITION": {
      return {
        ...state,
        result: state.num1 + state.num2
      }
    }
    case "SUBTRACTION": {
      return {
        ...state,
        result: state.num1 - state.num2
      }
    }
    case "RESET": {
      return initialState
    }
    
    default: {
      return state;
    }
  }
}

export default function SimpleCalculator () {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const [calc, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({ type: "NUMBER1", payload: { number }})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({ type: "NUMBER2", payload: { number }})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({ type: "ADDITION" })}>+</button>
        <button onClick={() => dispatch({ type: "SUBTRACTION" })}>-</button>
        <button onClick={() => dispatch({ type: "RESET" })}>c</button>
      </div>
      <div><h2>Result: {calc.result}</h2></div>
    </div>
  )
}
