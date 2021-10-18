import React from 'react'
import AddRemove from './AddRemove/AddRemove'
import './card.css'
//{id,product_name,image_url,description,is_available,price}
export default function Card({
  card: { product_name, image_url, description, is_available, price },
}) {

  return (
    <div className="Card">
      <div>
        <img src={image_url} alt="avatar" />
      </div>
      <div>{product_name}</div>
      <div>{description}</div>
      <div>{price}</div>
      <AddRemove />
      {is_available ? (
        <button className="high-stock">High Stock</button>
      ) : (
        <button className="low-stock">Low Stock</button>
      )}
    </div>
  );
}
