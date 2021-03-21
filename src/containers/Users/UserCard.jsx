import React from 'react';

import styled from 'styled-components';
import userIcon from '../../assets/user.png';
import { H3,H4 } from '../../components/Text';

const Wrapper = styled.div`
display:flex;
justify-content:space-around;
padding:8px;
align-items:center;
width:400px;
height:200px;
background: linear-gradient(81deg, #ddb35f, #7409c7);
margin-top:24px;
border:2px solid black;
border-radius:2%;
line-height:0px;
cursor:pointer;
span{
      display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
}
h4,h5{
 text-align:center;
}
&:hover{
    background:rgba(0,0,0,.7)
}
`
const ImageBlock = styled.img`
    width:100px;
   
`
export const UserCard = (props) => {
    const { name, email, city, street, phoneNumber, callback, rest } = props;
    return <>
        <Wrapper onClick={() => callback(rest)}>
            <ImageBlock src={userIcon} />
            <div>
                <H3>{name ? name : 'Username'}</H3>
                <H4>{city}</H4>
                <hr />
                <span><p>Пошта:</p><p>{email}</p></span>
                <span><p>Вулиця:</p><p>{street}</p></span>
                <span><p>Телефон:</p><p>{phoneNumber}</p></span>
            </div>
        </Wrapper>
    </>
}

