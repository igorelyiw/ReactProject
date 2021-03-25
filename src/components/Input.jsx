import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.input`
width:${props => props.width || '200px'}
font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  
  ::placeholder {
    color: palevioletred;
  }
` ;

export const Input = (props) => {
  return (
    <Wrapper />
  )
}