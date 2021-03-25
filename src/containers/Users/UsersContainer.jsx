import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsersData } from '../../store/userSlice';
import styled from 'styled-components';
import { Preloader } from '../../components';

import { UserCard } from './UserCard';
import { UserCardModal } from './UserCardModal';
import { UserModalData } from './UserModalData';

const Wrapper = styled.div`
width:80%;
padding:32px;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
`;

export const UsersContainer = (props) => {
  const state = useSelector(state => state.user);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const dispatch = useDispatch();
  React.useEffect(async () => {
    dispatch(getUsersData())
  }, [])
  const [userData, setUserData] = React.useState('');
  const selectedUser = (selectedUserId) => {
    const userData = state.users.find(user => user.id === selectedUserId);
    setUserData(userData);
    setIsOpenModal(true)
  }
  return (
    <Wrapper>
      {state.isFetching && <Preloader />}
      {state.users.map(user =>
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          city={user.address.city}
          street={user.address.street}
          phoneNumber={user.phone}
          onCardClick={() => {
            selectedUser(user.id);
          }}
        />)}
      <UserCardModal
        isOpenModal={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      >
        <UserModalData userData={userData} />
      </UserCardModal>
    </Wrapper>
  )
}