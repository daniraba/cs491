import React, {useState} from 'react';
import '../App.css'

const Counter2 = (props) => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <div>Counter2</div>
            <button
                style={{ backgroundColor: "pink" }}
                onClick={() => { if (count !== 0) setCount(count - 1) }}
            >
                -
            </button>
            {count}
            <button
                style={{ backgroundColor: "pink" }}
                onClick={() => setCount(count + 1)}
            >
                +
            </button>
        </div>
    );
}

export default Counter2;