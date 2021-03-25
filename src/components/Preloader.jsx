import React from 'react';

import styled from 'styled-components';
import Preload from '../assets/preload.svg'
const Wrapper = styled.img`
width:200px;
` ;

export const Preloader = (props) => {
  return (
    <Wrapper src={Preload}>
    </Wrapper>
  )
}