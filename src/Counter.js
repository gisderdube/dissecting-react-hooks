import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('#DC0073')

    return (
        <div>
            <span style={{ color }}>Current count is: {count}</span>
            <br />
            <button onClick={() => setCount(count + 1)}>Increase count</button>
            <button onClick={() => setColor(color === '#DC0073' ? '#00A1E4' : '#DC0073')}>
                Change Color
            </button>
        </div>
    )
}

export default Counter
