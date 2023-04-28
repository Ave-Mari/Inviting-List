import React, { Component } from 'react';
//styles
import { Wrapper } from './FriendsList.styles';
//components
import FriendCard from '../FriendCard/FriendCard';

const FriendsList = () => {

    return (
        <Wrapper>
          <div className="bts-wrapper">
          <button>All</button>
          <button>School</button>
          <button>Work</button>
          <button>Other</button>
          </div>
          
                <ul>
                <FriendCard />
                </ul>
            </Wrapper>
    )
}
 
export default FriendsList;
