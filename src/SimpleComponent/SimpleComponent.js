import React, { useState } from 'react'

export const SimpleComponent = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>My first Test</h1>
            <p>I am testing react</p>
            <button
                onClick={() => setCount(count + 1)}
            >Click to count</button>
            <h3 data-testid="count">{count}</h3>
        </div>
    )
}
