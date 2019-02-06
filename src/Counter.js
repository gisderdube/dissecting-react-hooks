import React, { useEffect, useState, useContext } from 'react'
import { ColorContext } from './ColorContext'

function Counter() {
    const [count, setCount] = useState(0)

    const { color, toggleColor } = useContext(ColorContext)

    return (
        <div style={{ color }}>
            Current count is: {count} <br />
            <button onClick={() => setCount(count + 1)}>Increase count</button>
        </div>
    )
}

export default Counter
