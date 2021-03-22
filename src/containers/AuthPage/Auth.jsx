import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { SmallButton } from '../../components';

import { SignupForm } from './AuthForm';
import { RegForm } from './RegForm';

const AuthPageWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
width:500px;
min-height:400px;
margin:100px auto;
  border: none;
  border-radius: 3px;
 `;
const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
box-shadow:    inset 0 0 10px #000000;
width:800px;
height:600px;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
`;
const ButtonWrapper = styled.div`
display:flex;
`;
export const AuthPage = (props) => {
    const [isActiveForm, setIsActiveForm] = useState(false)
    return (
        <Wrapper>
            <AuthPageWrapper>
                <ButtonWrapper>
                    <SmallButton isActiv={!isActiveForm} onClick={() => setIsActiveForm(false)}>Sign Up</SmallButton>
                    <SmallButton isActiv={isActiveForm} onClick={() => setIsActiveForm(true)}>Sign In</SmallButton>
                </ButtonWrapper>
                {isActiveForm
                    ? <SignupForm />
                    : <RegForm />
                }
            </AuthPageWrapper>
            <Link to="/about" style={{ textDecoration: 'none' }}>About As</Link>
        </Wrapper>
    )
}