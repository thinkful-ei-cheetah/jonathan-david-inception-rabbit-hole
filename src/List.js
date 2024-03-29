import React from 'react';
import Card from './Card';
import './List.css';
import App from './App';

export default function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            cardId={card.id}
            title={card.title}
            listId={props.listId}
            content={card.content}
            deleteCardHandler = { props.deleteCardHandler }
          />
        )}
        <button
          type='button'
          className='List-add-button'
          onClick={() => props.addRandomCardHandler(props.listId)}
        >
          Add Random Card
        </button>
      </div>
    </section>
  )
}
