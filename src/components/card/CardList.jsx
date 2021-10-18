import React from 'react'
import Card from './Card'
import data from '../../data.json'
console.log(data)
export default function CardList() {
    return (
      <div>
        {data.map((card) => (
            <Card card={card}/>
        ))}
      </div>
    );
}
