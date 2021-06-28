import React, { useState } from 'react'
import "./styles.css"
export const Counter = () => {
    const [inputValue, setInputValue] = useState(1);
    const [counter, setCounter] = useState(0)
    return (
        <>
            <h3 data-testid="header">My Counter</h3>
            <h1 data-testid={"counter"} className={`${counter > 100 ? "green" : ""}${counter < -100 ? "red" : ""}`}>{counter}</h1>
            <button

                data-testid="sub"
                onClick={() => setCounter(counter - inputValue)}
            >-</button>
            <input
                type="number"
                data-testid="input"
                value={inputValue} onChange={(e) => setInputValue(parseInt(e.target.value))} />
            <button
                data-testid="add"
                onClick={() => setCounter(counter + inputValue)}
            >+</button>
        </>
    )
}