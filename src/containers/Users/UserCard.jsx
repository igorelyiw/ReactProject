import React from 'react';

import styled from 'styled-components';
import userIcon from '../../assets/user.png';
import { H3, H4 } from '../../components';

const Wrapper = styled.div`
display:flex;
justify-content:space-around;
padding:16px;
align-items:center;
width:400px;
height:200px;
background: linear-gradient(81deg, #ddb35f, #7409c7);
margin-top:24px;
border:2px solid black;
border-radius:30px;
cursor:pointer;

&:hover{
    background:rgba(0,0,0,.7)
}
`;
const Span = styled.span`
    display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
`;
const ImageBlock = styled.img`
    width:100px;
   `;

export const UserCard = (props) => {
    const { name, email, city, street, phoneNumber, callback } = props;
    return (
        <Wrapper >
            <ImageBlock src={userIcon} />
            <div>
                <H3>{name ? name : 'Username'}</H3>
                <H4>{city}</H4>
                <hr />
                <Span><p>Пошта:</p><p>{email}</p></Span>
                <Span><p>Вулиця:</p><p>{street}</p></Span>
                <Span><p>Телефон:</p><p>{phoneNumber}</p></Span>
            </div>
        </Wrapper>
    )
}

