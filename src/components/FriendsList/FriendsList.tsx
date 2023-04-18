import React, { Component } from 'react';
//data
import { friendsData } from './../../data';
//
//styles
import { Wrapper } from './FriendsList.styles'

export default class FriendsList extends Component {
  render() {
    return (
        <Wrapper>
                <ul>
                {friendsData.map((item) => {
                    return (
                    <li>
                        <img src={item.pic} alt={item.name}></img>
                        <p>{item.name}</p>
                    </li>
                    )
                })}
                </ul>
            </Wrapper>
    )
  }
}
