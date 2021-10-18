import React from 'react'
import Card from './Card'
import data from '../../data.json'

export default function CardList() {
    return (
      <div>
        {data.map((card) => (
            <Card key = {card.id} card={card}/>
        ))}
      </div>
    );
}
