import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE'

class App extends Component {
  
  state = {
    store:STORE
  }

  deleteCardHandler = (listId, id) => {
    
    console.log(this.state.store)
    //const revisedLists = this.state.store.lists.map((lists)=lists).filter((card)=> card.id !== id);

    const foundList = this.state.store.lists.filter((lists) => lists.id === listId).filter((card)=> card.cardIds !== id);


    console.log(foundList)

    this.setState({
   //   store: {
    //    ...this.state.store,
   //     lists: revisedLists
   //   }
    });

  }

  addRandomCardHandler = (listId) => {

    
  }

  render() {
   
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.store.lists.map(list => (
            <List
              key={list.id}
              listId={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.store.allCards[id])}
              deleteCardHandler = { this.deleteCardHandler }
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
