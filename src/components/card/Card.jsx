import React from 'react'
import AddRemove from './AddRemove/AddRemove'

export default function Card({id,product_name,image_url,description,is_available,price}) {
    return (
      <div className="Card">
        <div>
          <img
            src={image_url}
            alt="avatar"
          />
        </div>
        <div>{product_name}</div>
            <div>{description}</div>
        <div>{price}</div>
        <AddRemove/>
            <button>{is_available}</button>
      </div>
    );
}
