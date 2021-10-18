import React from 'react'
import Card from './Card'
import data from '../../data.json'
import './card.css'

export default function CardList() {
  return (
      <div className="container">
        {data.map((card) => (
            <Card key = {card.id} card={card}/>
        ))}
      </div>
    );
}
