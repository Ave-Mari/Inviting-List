import React, { Component } from 'react';
//data
import { friendsData } from './../../data';

export default class FriendsList extends Component {
  render() {
    return (
        <section>
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
            </section>
    )
  }
}
