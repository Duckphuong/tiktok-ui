import { useCallback, memo } from 'react';

function Callback({ onIncrease }) {
    console.log('re render');
    return (
        <>
            <h2>lo ae</h2>
            <button onClick={onIncrease}>click</button>
        </>
    );
}
export default memo(Callback);
