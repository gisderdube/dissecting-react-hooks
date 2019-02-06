import React, { useEffect, useState, useRef } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    function scrollListener() {
        setCount(window.pageYOffset)
    }
    useEffect(() => {
        document.addEventListener('scroll', scrollListener)

        return () => document.removeEventListener('scroll', scrollListener)
    }, [])

    return <div>Current count is: {count}</div>
}

export default Counter
