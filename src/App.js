import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE'

class App extends Component {
  
  state = {
    store:STORE
  }


  deleteFound(list, listId, id)
  { 
    if (listId === list.id)
    {
      return list.cardIds.splice(list.cardIds.indexOf(id), 1);
    } 
    return null;
  }

  deleteCardHandler = (listId, id) => {
    this.state.store.lists.map((list) => this.deleteFound(list, listId, id));
    this.setState({
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
