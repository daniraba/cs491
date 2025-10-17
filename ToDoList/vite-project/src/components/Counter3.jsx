import React, {useState} from 'react';
import '../App.css'

const Counter3 = (props) => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }
    return(
        <div>
            <div>Counter3</div>
            <button style={{ backgroundColor: "pink" }} onClick={decrease}>
                -
            </button>
            {count}
            <button style={{ backgroundColor: "pink" }} onClick={increase}> 
                +
            </button>
        </div>
    )
}

export default Counter3;