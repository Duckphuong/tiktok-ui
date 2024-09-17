import { useReducer, useState } from 'react';

// useState
// B1: đặt init state = 0
// B2: actions: up và down

// useReducer
// B1: Init state = 0
// B2: actions: upp down
// B3: Reducer
// B4: Dispatch

//init state
const initState = 0;
//actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
//Reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('invalid action');
    }
};

function RReducer() {
    // const [count, setCount] = useState(0);
    const [count, Dispatch] = useReducer(reducer, initState);

    // const handleUp = () => {
    //     setCount(count + 1);
    // };
    // const handleDown = () => {
    //     setCount(count - 1);
    // };
    // return (
    //     <div>
    //         <h2>{count}</h2>
    //         <br></br>
    //         <button onClick={handleUp}>UP</button>
    //         <button onClick={handleDown}>Down</button>
    //     </div>
    // );
    return (
        <div>
            <h2>{count}</h2>
            <br></br>
            <button onClick={() => Dispatch(UP_ACTION)}>UP</button>
            <button onClick={() => Dispatch(DOWN_ACTION)}>Down</button>
        </div>
    );
}

export default RReducer;
