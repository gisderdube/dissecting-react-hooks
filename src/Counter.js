import React, { useEffect, useState, useRef } from 'react'

function useInterval(callback, delay) {
    const savedCallback = useRef()

    useEffect(() => {
        savedCallback.current = callback
    })

    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}

function Counter() {
    const [count, setCount] = useState(0)

    useInterval(() => {
        setCount(count + 1)
    }, 1000)

    return (
        <div>
            Current count is: {count}
            <br />
            <button onClick={() => setCount(count + 1)}>Increase count</button>
        </div>
    )
}

export default Counter
