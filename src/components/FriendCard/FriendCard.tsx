import React, { Component } from 'react';
//data
import { friendsData } from '../../data';
//styles
import { Card } from './FriendCard.styles'

const FriendCard = () => {  
    return (
        <>
        {friendsData.map((item) => {
            return (
            <Card>
                <img src={item.pic} alt={item.name}></img>
                <p>{item.name}</p>
                <button>+</button>
            </Card>
            
            )
        })}        
        </>
    )

}

export default FriendCard;
