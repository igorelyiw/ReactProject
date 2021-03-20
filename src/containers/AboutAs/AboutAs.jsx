import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { IoArrowUndoCircle as BackIcon } from "react-icons/io5";
import { H1, H3, H4, TextGradient } from '../../components/Text';
import aboutUs from '../../assets/aboutUs.jpg'

const Wrapper = styled.div`
width:80%;
min-height:500px;
margin:50px auto;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const ContentWrapper = styled.div`
width:100%;
min-height:200px;
display:flex;
flex-direction:row;
justify-content:space-around;
`;
const TextBlock = styled.div`
width:40%;
min-height:400px;
padding:16px;
font-family:monospace;
`;
const ImageBlock = styled.img`
width:40%;
height:400px;
`;
export const AboutAs = (props) => {
    return <>
        <Wrapper>
            <Link to="/" style={{ textDecoration: 'none' }}> <H4><BackIcon /> Повернутися назад</H4></Link>
            <div>
                <TextGradient>Тепер трішки про нашу компанію</TextGradient>
            </div>
            <ContentWrapper>
                <TextBlock>
                    <H3>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores maiores expedita a sed architecto magnam minus autem excepturi vitae, ut deserunt velit animi voluptatem error placeat. Perspiciatis, sit ex facilis amet ipsa sed eligendi accusantium corporis labore modi, expedita nostrum autem esse quos iusto eos atque? Veniam explicabo distinctio adipisci!
</H3>
                </TextBlock>
                <ImageBlock src={aboutUs}>
                </ImageBlock>

            </ContentWrapper>
        </Wrapper>



    </>
}