import React, { Component } from 'react';
//data
import { friendsData } from './../../data';

const FriendCard = () => {  
    return (
        <>
        {friendsData.map((item) => {
            return (
            <li>
                <img src={item.pic} alt={item.name}></img>
                <p>{item.name}</p>
            </li>
            )
        })}
        </>
    )

}

export default FriendCard;
