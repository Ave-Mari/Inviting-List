import * as React from 'react';
import { Component } from 'react'; 
//components
import FriendsList from './components/FriendsList/FriendsList';
import InvitingList from './components/InvitingList/InvitingList';


export const App = () => { 
    return (
      <main>      
      <FriendsList />
      <InvitingList />
      </main>
    )

}

export default App;