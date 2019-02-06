import React, { useContext } from 'react'

import Counter from './Counter'
import { ColorContext, ColorContextProvider } from './ColorContext'

function Application() {
    return (
        <ColorContextProvider>
            <Workspace />
        </ColorContextProvider>
    )
}

function Workspace() {
    const { color, toggleColor } = useContext(ColorContext)

    return (
        <div>
            <h1 style={{ color }}>Dissecting React Hooks</h1>
            <Counter />
            <button onClick={toggleColor}>Toggle color</button>
        </div>
    )
}

export default Application
