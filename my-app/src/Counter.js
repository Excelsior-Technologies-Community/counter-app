import React  from "react";
import "./counter.css";
function Counter(props){
    return(
        <div className="app-container">
            <div className="counter-box">
        <div className="counter">
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
            </div>
            </div>
        </div>
    );
}
export default Counter;