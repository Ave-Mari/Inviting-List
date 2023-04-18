import * as React from 'react';
import { Component } from 'react'; 
//components
import FriendsList from './components/FriendsList/FriendsList';



export default class App extends Component {
 
  render() {

    return (
      <main>      
      <FriendsList />
      </main>
    )
  }
}
