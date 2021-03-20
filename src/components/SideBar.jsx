import React from 'react';

import  styled  from 'styled-components';
import { Input } from './Input';

const SideBarWrapper=styled.div `
width:20%;
border-right:1px solid black;
`
export const SideBar=(props)=>{
    return <>
<SideBarWrapper>
<div>
    + Add User
</div>
<form>
    <Input/>
</form>
<form>
<Input/>

</form>
<div>
    Sortable
</div>
</SideBarWrapper>

    </>
}