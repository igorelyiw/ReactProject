import React from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { isAuthModalClose } from '../store/authSlice';

import { ConfirmationButton, SmallButton,Modal } from './index';
import { DownIcon, LogOutIcon, UpIcon } from './icon';

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
`;
const LiCustom = styled.div`
list-style-type:none;

&:hover {
         border-bottom:2px solid black;
             }
`
const UlCustom = styled.ul`
padding:0;
  `;

export const DropDown = (props) => {
    const [isShow, setIsShow] = React.useState(false);
    const onToggleClick = () => setIsShow(!isShow);
    const openLogOut = () => {
        onToggleClick()
    }
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const dispatch = useDispatch();
    const exit = () => {
        dispatch(isAuthModalClose())
        setIsModalOpen(false)
    }
    const UserName="Igor Elyiw";
    return <>
        <SmallButton onClick={() => onToggleClick()}>
            {isShow
                ? <UpIcon />
                : <DownIcon />
            }
            {UserName}
                        </SmallButton>
        {isShow &&
            <DropDownMenu>
                <UlCustom>
                    <LiCustom onClick={() => openLogOut()}>
                          <div onClick={() => setIsModalOpen(true)} ><LogOutIcon />Log out</div>
                    </LiCustom>
                    <LiCustom>
                        <div>Settings</div>
                    </LiCustom>
                </UlCustom>
            </DropDownMenu>
        }
        <Modal
            title='Exit'
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        >
            <ConfirmationButton
                confirmButtonText='Exit'
                confirmButtonOnClick={() => exit()}
                dismissButtonText='Cancel'
                dismissButtonOnClick={() => setIsModalOpen(false)}
            />
        </Modal>
    </>
}