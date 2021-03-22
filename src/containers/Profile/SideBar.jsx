import React from 'react';
import styled from 'styled-components';

import { AddIcon, H3, Input, SortIcon } from '../../components';

const SideBarWrapper = styled.div`
width:20%;
border-right:1px solid black;
`;

export const SideBar = (props) => {
    return (
        <SideBarWrapper>
            <div>
                <H3>
                    <AddIcon /> Add User
                   </H3>
            </div>
            <form>
                <Input />
            </form>
            <form>
                <Input />
            </form>
            <div>
                <H3>
                    <SortIcon />  Sortable
                 </H3>
            </div>
        </SideBarWrapper>
    )
}