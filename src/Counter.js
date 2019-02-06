import React, { useReducer } from 'react'

function counterReducer(state, action) {
    if (action.type === 'increaseCount') return { ...state, count: state.count + 1 }
    if (action.type === 'toggleColor')
        return { ...state, color: state.color === '#DC0073' ? '#00A1E4' : '#DC0073' }
    return state
}

function Counter() {
    const [state, dispatch] = useReducer(counterReducer, {
        count: 0,
        color: '#DC0073',
    })

    const { color, count } = state

    return (
        <div>
            <span style={{ color }}>Current count is: {count}</span>
            <br />
            <button onClick={() => dispatch({ type: 'increaseCount' })}>Increase count</button>
            <button onClick={() => dispatch({ type: 'toggleColor' })}>Change Color</button>
        </div>
    )
}

export default Counter
