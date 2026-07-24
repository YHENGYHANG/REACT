import { useState } from "react";

function State(){
    const [count, setCount] = useState(0);
    const [byten, BYTEN] = useState(10);

    const increment = () => setCount(count +1)
    const decrement = () => setCount(count-1); 
    const reset = () => setCount(0);

    //Increment By Ten
    const ten = () => BYTEN(byten + 10);
    const miten = () => BYTEN(byten -10);
    const rest = () => BYTEN(0);

    return(
        <div>
            {/* Just Increement */}
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>

            {/* //Increase By Ten: */}
            <p>BY TEN: {byten}</p>
            <button onClick={rest}>Reset</button>
            <button onClick={ten}>Ten</button>
            <button onClick={miten}>DecreaseByten</button>
        </div>



    )

}
export default State