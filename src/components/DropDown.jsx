import React, { useState } from 'react';

import { CgLogOut as LogOutIcon } from 'react-icons/cg';
import styled from 'styled-components';
import { ConfirmationButton, SmallButton } from './Buttons/Buttons';
import { IoIosArrowDown as DownIcon } from "react-icons/io";
import { IoIosArrowUp as UpIcon } from "react-icons/io";
import { Modal } from '../components/Modal';
import { useDispatch } from 'react-redux';
import { isAuthModalClose } from '../store/authSlice';

const DropDownMenu = styled.div`
display:flex;
flex-direction:column;
align-items:center;
position:relative;
top:10px;
z-index:3;
background:white;
border:1px solid black;
font-size:16px;
`
const LiCustom = styled.div`
list-style-type:none;
&:hover {
         border-bottom:2px solid black;
             }
`
const UlCustom = styled.ul`
padding:0;


  `
export const DropDown = (props) => {
    const [isShow, setShow] = useState(false);
    const onToggleClick = () => setShow(!isShow);
    const openLogOut = () => {
        onToggleClick()
    }
    const [isModalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const exit = () => {
        dispatch(isAuthModalClose())
        setModalOpen(false)
    }
    return <>
        <SmallButton onClick={() => onToggleClick()}>
            {isShow
                ? <UpIcon />
                : <DownIcon />
            }
            Igor Elyiw
                        </SmallButton>
        {isShow
            ? <DropDownMenu>
                <UlCustom>
                    <LiCustom onClick={() => openLogOut()}>
                        <LogOutIcon />  <span onClick={() => setModalOpen(true)} >Log out</span>
                    </LiCustom>
                    <LiCustom>
                        <span>Settings</span>
                    </LiCustom>
                </UlCustom>

            </DropDownMenu>
            : null
        }

        <Modal
            title='Exit'
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
        >
            <ConfirmationButton
                confirmButtonText={'Exit'}
                confirmButtonOnClick={() => exit()}
                dismissButtonText={'Cancel'}
                dismissButtonOnClick={() => setModalOpen(false)}
            />
        </Modal>
    </>
}