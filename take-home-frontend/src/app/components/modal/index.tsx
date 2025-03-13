import React from "react";
import styled from "styled-components";

import Icon from '../icon';

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #F5F5F4;
  display: block;
  z-index: 1;
  opacity: 0.8;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  background: #F8F9F7;
  z-index: 1000;
  padding: 16px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 12px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <>
          <Overlay onClick={onClose} />
          <ModalContainer>
            <ModalHeader>
              <IconButton onClick={onClose}>
                <Icon src="/close-circle-icon.svg" height={40} width={40} />
              </IconButton>
            </ModalHeader>
            <ModalBody>
              {children}
            </ModalBody>
          </ModalContainer>
        </>
      )}
    </>
  );
};

export default Modal;
