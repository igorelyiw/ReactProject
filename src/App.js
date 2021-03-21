import React from 'react'
import { useSelector } from 'react-redux';
import './App.css';

import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { AuthPage } from './containers/AuthPage/Auth';

import styled from 'styled-components';

const AppContainer = styled.div`
width:70%;
margin:0 auto;
`
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
