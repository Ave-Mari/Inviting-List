import React, { useState } from 'react';
//styles
import { Wrapper } from './InvitingList.styles';
import axios from 'axios';

export default function InvitingList() {

    const [form, setForm] = useState(false);
    const [list, setList] = useState([]);

    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');

    const func = () => {
        setForm(!form);
    }

    const submitData = (e) => {
      e.preventDefault();

      if (eventDate && eventName) {
        const eventData = {
          eventName: eventName.replace(/ /g, '_'),
          eventDate: eventDate
        }
        axios.post('http://localhost:5000/create-new-inviting-list', eventData)
        .then((res) => console.log('send data succesfully'))
        .catch((error) => {
          console.error('error with sending', error)
        })
  
      } else {
        console.log('type the data')
      }

      
    }   

    const inputNameHandler = (e) => {
      const event = e.target.value;
      setEventName(event);
    }
    const inputDateHandler = (e) => {
      const eventDate = e.target.value;
      setEventDate(eventDate);
    }
  return (
    <Wrapper>
        <div className="bts-wrapper">
          <button>Name</button>
          <button>Name</button>
          <button>Name</button>
          </div>

          <div className="inviting-list">
            {form ?
               null
               :
               <button onClick={func}>Create an Inviting List</button>
        }
       

        {form ?
        (<form 
        onSubmit={submitData}
        >
            <label htmlFor="event">
                Event name
                <input type="text" name="event" value={eventName} onChange={inputNameHandler}></input>
            </label>
            <label htmlFor="event">
                Event date
                <input type="date" name="eventDate" value={eventDate} onChange={inputDateHandler}></input>
            </label>
            <button type="submit">create</button>
            <button onClick={func}>x</button>
          </form>)
          :
          null
    }
          
          </div>
        
    </Wrapper>
  )
}
