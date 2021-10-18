import React from 'react'

export default function AddRemove() {
    const [add,setAdd] = React.useState(0)
    return (
      <div>
        <button >-</button>
        <div></div>
        <button>+</button>
      </div>
    );
}
