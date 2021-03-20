import React from 'react';

import styled from 'styled-components';

import { SideBar } from './SideBar';
import { UsersContainer } from '../containers/Users/UsersContainer';

const Wrapper = styled.div`
display:flex;
border:1px solid black;
`

export const Profile = (props) => {
    
return <>
    <Wrapper>
        <SideBar />
        <UsersContainer/>

    </Wrapper>
    
</>
}