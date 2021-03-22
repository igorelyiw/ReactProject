import React from 'react'
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import './App.css';
import { Header } from './containers/Profile/Header';
import { Profile } from './containers/Profile';
import { AuthPage } from './containers/AuthPage';

const AppContainer = styled.div`
width:70%;
margin:0 auto;
`;

function App() {
   const isAuth = useSelector(state => state.auth.isAuth);
   return (
      <AppContainer>
         {isAuth
            ? <>
               <Header />
               <Profile />
            </>
            : <AuthPage />
         }
      </AppContainer>
   )
}
export default App;
