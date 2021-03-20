import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { UserCard } from './UserCard';
import { getUsers } from '../../store/authSlice';

const TextBar = styled.div`
width:80%;
padding:32px;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
`
export const UsersContainer = (props) => {
    const state = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(async() => {
      const response=await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch(getUsers(response.data));                      
}, [])
return <>
            <TextBar>
            {state.users.map(c =>
                <UserCard 
                    key={c.id}
                    name={c.name}
                    email={c.email}
                    city={c.address.city}
                    street={c.address.street}
                    phoneNumber={c.phone}
                    callback={(rest)=>null}
                    rest={c}

                />)}
        </TextBar>

</>
}