import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE'

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends Component {



  state = {
    store: STORE

  }


  deleteFound(list, listId, id) {
    if (listId === list.id) {
      return list.cardIds.splice(list.cardIds.indexOf(id), 1);
    }
    return list;
  }

  deleteCardHandler = (listId, id) => {
    this.state.store.lists.map((list) => this.deleteFound(list, listId, id));
    this.setState({
    });

  }

  addRandomCardHandler = (listId) => {
    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        list.cardIds.push(newCard.id)
      }
      return list
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards, [newCard.id]: newCard
        }
      }
    })
  };

  render() {

        return(
      <main className = 'App' >
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
                  deleteCardHandler={this.deleteCardHandler}
                  addRandomCardHandler={this.addRandomCardHandler}
                />
              ))}
            </div>
      </main>
    );
  }
}

export default App;

