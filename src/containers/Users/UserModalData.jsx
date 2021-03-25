import React from 'react';

import styled from 'styled-components';
import { H5 } from '../../components';

const ItemWrapper = styled.div`
border-bottom:2px solid black;
margin-top:8px;
`;
const B = styled.b`
font-weight:bold;
`;

export const UserModalData = ({ userData }) => {
    const { address, company, email, name, username, website } = userData;
    return (
        <div>
            <ItemWrapper>
                <H5 isBold>Name: </H5>{name}
            </ItemWrapper>
            <ItemWrapper>
                <H5 isBold>Username: </H5>  {username}
            </ItemWrapper>
            <ItemWrapper>
                <H5 isBold>Address: </H5>{address.street}
            </ItemWrapper>
            <ItemWrapper>
                <H5 isBold>Company: </H5>{company.name}
            </ItemWrapper>
            <ItemWrapper><H5 isBold> Phrase: </H5>{company.catchPhrase} </ItemWrapper>
            <ItemWrapper>
                <H5 isBold>Email: </H5>{email}
            </ItemWrapper>
            <ItemWrapper>
                <H5 isBold>Website: </H5>{website}
            </ItemWrapper>
        </div>
    )
}
