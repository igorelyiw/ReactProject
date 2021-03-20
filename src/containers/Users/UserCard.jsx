import React from 'react';

import styled from 'styled-components';
import userIcon from '../../assets/icon/user.png';

const CardWrapper = styled.div`
display:flex;
justify-content:space-between;
padding:8px;
align-items:center;
width:40%;
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
const ImageBlock = styled.div`
width:35%;
img{
    width:100px;
    height:100px;
}
`
const TextWrapper = styled.div`
width:65%;

`
export const UserCard = (props) => {
    const { name, email, city, street, phoneNumber,callback,rest } = props;
    return <>
        <CardWrapper onClick={()=>callback(rest)}>
            <ImageBlock>
                <img src={userIcon} alt="" />
            </ImageBlock>
            <TextWrapper>
                <h4>{name ? name : 'Username'}</h4>
                <h5>{city}</h5>
                <hr />
                <span><p>Пошта:</p><p>{email}</p></span>
                <span><p>Вулиця:</p><p>{street}</p></span>
                <span><p>Телефон:</p><p>{phoneNumber}</p></span>
            </TextWrapper>
        </CardWrapper>
    </>
}

