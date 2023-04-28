import React, { useState } from 'react';
//styles
import { Wrapper } from './InvitingList.styles';

export default function InvitingList() {

    const [form, setForm] = useState(false);
    const [list, setList] = useState([]);

    const func = () => {
        setForm(!form);
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
        (<form>
            <label htmlFor="event">
                Event name
                <input name="event"></input>
            </label>
          </form>)
          :
          null
    }
          
          </div>
        
    </Wrapper>
  )
}
