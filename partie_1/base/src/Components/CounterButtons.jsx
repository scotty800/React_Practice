
function CounterButton({ setCount }) {
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </div>
    )
}

export default CounterButton;