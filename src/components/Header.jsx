import React from 'react';

import styled from 'styled-components';

import { H1, H3 } from './Text';
import { DropDown } from './DropDown';

const HeaderBlock = styled.div`
height:50px;
padding:16px;
background: linear-gradient(81deg, #ddb35f, #7409c7);
display:flex;
align-items:baseline;
justify-content:space-between;
border:1px solid black;
`;
const TitleHeader = styled(H1)`
font-size:200%;
`;
const AuthWrapper = styled(H3)`
cursor:pointer;
`;

export const Header = (props) => {
    return (
        <HeaderBlock>
            <TitleHeader isBold>
                Project-Demo
</TitleHeader >
            <AuthWrapper >
                <DropDown />
            </AuthWrapper>
        </HeaderBlock>
    )
}