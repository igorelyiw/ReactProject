import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
const Wrapper=styled.div `
display:flex;
flex-direction:row;
justify-content:center;
align-items:end;
margin-top:50px;
`

export const ModalCustom = (props) => {
   const{open,close}=props;
return <>
<Modal
isOpen={open}
onRequestClose={close}
ariaHideApp = {false}
style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      width:'200px',
      height:'150px',
margin:'200px auto',
      
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }}
>
<Wrapper>
{props.children}

</Wrapper>

</Modal>


</>
       
       
}