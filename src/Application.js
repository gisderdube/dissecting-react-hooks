import React, { useState, useEffect } from 'react'

import Counter from './Counter'

function Application() {
    return (
        <div
            style={{
                minHeight: '150vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <h1>Making sense of React Hooks</h1>
            <Counter />
        </div>
    )
}

export default Application
