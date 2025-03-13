import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import type { IUser } from "@/store/types";

import Modal from "../components/modal";

import {
  FormHeading,
  DeleteMemberContainer,
  MessageContainer,
  MessageImage,
  MessageText,
  ButtonRow,
  BlackButton,
  TextButton
 } from './styles';

import type { RootState } from "@/store/store";
import { deleteUserRequest } from '@/store/userSplice';


interface IModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  userId: number
}


const DeleteMemberModalForm: React.FC<IModalFormProps> = ({
  isOpen, onClose, userId
}) => {
  const [isUserDeleteSuccessful, setIsUserDeleteSuccessful] = React.useState<boolean>(false);
  const [isUserUpdateFailed, setIsUserUpdateFailed] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  const deleteUserLoadingState = useSelector((state: RootState) => state.user.loading.delete);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(deleteUserRequest(userId));
  };

  React.useEffect(() => {
    if (
      deleteUserLoadingState.isLoading === false
      && deleteUserLoadingState.isSucceeded
    ) {
      setIsUserDeleteSuccessful(true);
    }
    else if (deleteUserLoadingState.isLoading === false && deleteUserLoadingState.isSucceeded === false) {
      setIsUserUpdateFailed(true);
    }
  }, [deleteUserLoadingState.isLoading]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <DeleteMemberContainer>
        {isUserDeleteSuccessful ? (
          <MessageContainer>
            <MessageImage src="/successMessageImage.png" />
            <MessageText>Team member successfully deleted.</MessageText>
            <ButtonRow>
              <TextButton onClick={onClose}>View all team members</TextButton>
            </ButtonRow>
          </MessageContainer>
        ): (
          <>
            {isUserUpdateFailed ? (
              <MessageContainer>
                <MessageText>Unable to delete team member</MessageText>
                <ButtonRow>
                  <TextButton onClick={onClose}>Exit</TextButton>
                </ButtonRow>
              </MessageContainer>
            ): (
                <>
                  <FormHeading>Do you want to delete the user?</FormHeading>
                  <BlackButton onClick={() => dispatch(deleteUserRequest(userId))}>Delete User</BlackButton>
                </>
            )}
          </>
        )}
    </DeleteMemberContainer>
  </Modal>
  );
};

export default DeleteMemberModalForm;
