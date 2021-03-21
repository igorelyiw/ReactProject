import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { UserCard } from './UserCard';
import { getUsers } from '../../store/authSlice';

const Wrapper = styled.div`
width:80%;
padding:32px;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
`
export const UsersContainer = (props) => {
  const state = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(getUsers(response.data));
  }, [])
  return (
    <Wrapper>
      {state.users.map(user =>
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          city={user.address.city}
          street={user.address.street}
          phoneNumber={user.phone}
          callback={(rest) => null}
        />)}
    </Wrapper>
  )
}