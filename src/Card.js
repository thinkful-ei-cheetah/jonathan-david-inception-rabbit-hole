import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='Card'>
      <button onClick = {()=>props.deleteCardHandler(props.listId, props.cardId)}
        type='button'
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}
