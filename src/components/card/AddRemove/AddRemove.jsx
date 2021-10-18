import React from 'react'
import './Add.css'

export default function AddRemove() {
    const [add, setAdd] = React.useState(0);
    const handleDecrement = () => {
        if (add>0) {
            setAdd(add - 1)
        }
    }
    const handleIncrement =() => { setAdd(add+1) }
    return (
      <div className="addremove-container">
        <button onClick={handleDecrement}>-</button>
            <div className="box">{add}</div>
        <button onClick={handleIncrement}>+</button>
      </div>
    );
}
