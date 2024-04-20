import counterStore from "../store/counter-store";
function Counter() {
    const { count, increment, decrement } = counterStore(state => ({
        count: state.count,
        increment: state.increment,
        decrement: state.decrement
    }))

    return (
        <>
            <div>
                <button onClick={decrement}>Decrement</button>
                <h1>{count < 0 ? "Negative value" : count}</h1>
                <button onClick={increment}>Increment</button>
            </div>
        </>
    );
}

export default Counter;