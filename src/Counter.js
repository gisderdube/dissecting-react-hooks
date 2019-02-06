import React, { useState } from 'react'

function Counter() {
    const [state, setState] = useState({
        count: 0,
        color: '#DC0073',
    })

    const { color, count } = state

    return (
        <div>
            <span style={{ color }}>Current count is: {count}</span>
            <br />
            <button onClick={() => setState({ ...state, count: count + 1 })}>Increase count</button>
            <button
                onClick={() =>
                    setState({ ...state, color: color === '#DC0073' ? '#00A1E4' : '#DC0073' })
                }
            >
                Change Color
            </button>
        </div>
    )
}

export default Counter
