import React, { Component } from 'react';
//styles
import { Wrapper } from './FriendsList.styles';
//components
import FriendCard from '../FrinedCard/FriendCard';

const FriendsList = () => {

    return (
        <Wrapper>
          <button>All</button>
          <button>School</button>
          <button>Work</button>
                <ul>
                <FriendCard />
                </ul>
            </Wrapper>
    )
}
 
export default FriendsList;
