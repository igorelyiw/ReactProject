import React from 'react';

import styled from 'styled-components';
import { UsersContainer } from '../Users';

import { SideBar } from './index';

const Wrapper = styled.div`
display:flex;
border:1px solid black;
`;

export const Profile = (props) => {
    return (
        <Wrapper>
            <SideBar />
            <UsersContainer />
        </Wrapper>
    )
}