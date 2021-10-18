import React from 'react'
import AddRemove from './AddRemove/AddRemove'

export default function Card() {
    return (
      <div className="Card">
        <div>
          <img
            src="http://dummyimage.com/200x200.png/dddddd/000000"
            alt="product"
          />
        </div>
        <div>product name</div>
        <div>description</div>
        <div>price</div>
          <AddRemove/>
        <button>high Stock</button>
      </div>
    );
}
