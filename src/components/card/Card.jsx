import React from 'react'
import AddRemove from './AddRemove/AddRemove'
import './card.css'
//{id,product_name,image_url,description,is_available,price}
export default function Card({
  card: { product_name, image_url, description, is_available, price },
}) {

  return (
    <div className="Card">
      <div className="column1 column">
        <img src={image_url} alt="avatar" />
      </div>
      <div className="column2 column">
        <div> {product_name}</div>
        <div >description: {description}</div>
        <div>price: {price}</div>
      </div>
      <div className="column3 column">
        <AddRemove />
        {is_available ? (
          <button className="high-stock">High Stock</button>
        ) : (
          <button className="low-stock">Low Stock</button>
        )}
      </div>
    </div>
  );
}
