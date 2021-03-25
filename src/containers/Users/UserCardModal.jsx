import React from 'react';

import { Modal } from "../../components";

export const UserCardModal = ({ children, isOpenModal, onClose, userData }) => {
    return (
        <Modal
            isOpen={isOpenModal}
            isClosable
            onClose={onClose}
        >
            {children}
        </Modal>
    )
}