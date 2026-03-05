import {useState} from "react";
function Counter() {
    const[count,setCount] = useState(0);

    function handleClick()
    {
        setCount(count + 1);
    }

    return (
        <div className="card">
            <h1>Click Counter</h1>
            <h2>{count}</h2>
            <button onClick={handleClick} className="clickButton">Click Me to Count</button>       
        </div>
    )
}

export default Counter;