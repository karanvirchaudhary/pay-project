import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import type { IUser } from "@/store/types";

import Modal from "../components/modal";

import {
  Form,
  FormHeading,
  FormFooter,
  FormButtonBlack,
  Label,
  Input,
  ErrorMessage,
  FormBody,
  MessageContainer,
  MessageImage,
  MessageText,
  ButtonRow,
  BlackButton,
  TextButton
 } from './styles';

import type { RootState } from "@/store/store";
import { patchUserRequest } from '@/store/userSplice';


interface IModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  userId: number;
}

export interface IUserForm {
  user_name: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}

interface IEditUserFormErrors {
  user_name?: string;
  first_name?: string;
  last_name?: string;
  date_of_birth?: string;
}

interface IEditUserFormState {
  form: IUserForm;
  formErrors: IEditUserFormErrors;
}

const EditMemberFormModal: React.FC<IModalFormProps> = ({
  isOpen, onClose, userId
}) => {
  const [formState, setFormState] = React.useState<IEditUserFormState>({
    form: {
      user_name: "",
      first_name: "",
      last_name: "",
      date_of_birth: "",
    },
    formErrors: {}
  });

  const users = useSelector((state: RootState) => state.user.users);

  React.useEffect(() => {
    const user = users.find((user) => user.id === userId);
    if (user) {
      setFormState({
        form: {...user},
        formErrors: {}
      });
    }
  }, []);

  const [isUserUpdated, setIsUserUpdated] = React.useState<boolean>(false);
  const [isUserUpdateFailed, setIsUserUpdateFailed] = React.useState<boolean>(false);

  const form = formState.form;
  const formErrors = formState.formErrors;

  const dispatch = useDispatch();

  const editUserLoadingState = useSelector((state: RootState) => state.user.loading.patch);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [e.target.name]: e.target.value,
      }
    }));
  };

  const validateForm = () => {
    let formErrors = {
      user_name: !form.user_name ? "Please enter a username" : undefined,
      first_name: !form.first_name ? "Please enter the first name" : undefined,
      last_name: !form.last_name ? "Please enter the last name" : undefined,
      date_of_birth: !form.date_of_birth ? "Please enter the date of birth for this member" : undefined,
    };

    const isValid = Object.values(formErrors).every((error) => error === undefined);

    setFormState((prevState) => ({
      ...prevState,
      formErrors: formErrors
    }));

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      dispatch(patchUserRequest({
        ...form,
        id: userId,
      }));
    }
  };

  React.useEffect(() => {
    if (editUserLoadingState.isLoading === false && editUserLoadingState.isSucceeded === true) {
      setIsUserUpdated(true);
    }
    else if (editUserLoadingState.isLoading === false && editUserLoadingState.isSucceeded === false) {
      setIsUserUpdateFailed(true);
    }
  }, [editUserLoadingState.isLoading]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <>
        {isUserUpdated === true ? (
          <MessageContainer>
            <MessageImage src="/successMessageImage.png" />
            <MessageText>Team member successfully updated.</MessageText>
            <ButtonRow>
              <BlackButton onClick={onClose}>Update another member</BlackButton>
              <TextButton onClick={onClose}>View all team members</TextButton>
            </ButtonRow>
          </MessageContainer>
        ): (
          <>
            {isUserUpdateFailed === true ? (
              <MessageContainer>
                <MessageText>Unable to update team member's info</MessageText>
                <ButtonRow>
                  <TextButton onClick={onClose}>Exit</TextButton>
                </ButtonRow>
              </MessageContainer>
            ): (
              <>
                <FormHeading>Manage Member</FormHeading>
                <Form onSubmit={handleSubmit}>
                  <FormBody>
                    <Label>
                      Username
                      <Input placeholder="user_name" type="user_name" name="user_name" value={form.user_name} onChange={handleChange} />
                      {formErrors.user_name && <ErrorMessage>{formErrors.user_name}</ErrorMessage>}
                    </Label>

                    <Label>
                      First name
                      <Input placeholder="First Name" type="text" name="first_name" value={form.first_name} onChange={handleChange} />
                      {formErrors.first_name && <ErrorMessage>{formErrors.first_name}</ErrorMessage>}
                    </Label>

                    <Label>
                      Last Name
                      <Input placeholder="Last Name" type="text" name="last_name" value={form.last_name} onChange={handleChange} />
                      {formErrors.last_name && <ErrorMessage>{formErrors.last_name}</ErrorMessage>}
                    </Label>

                    <Label>
                      Date of Birth (optional)
                      <Input type="date" name="date_of_birth" value={form.date_of_birth} onChange={handleChange} />
                      {formErrors.date_of_birth && <ErrorMessage>{formErrors.date_of_birth}</ErrorMessage>}
                    </Label>
                  </FormBody>

                  <FormFooter>
                    <FormButtonBlack type="submit" color="#1A1B18">Save Changes</FormButtonBlack>
                  </FormFooter>
                </Form>
              </>
            )}
          </>
        )}
      </>
    </Modal>
  );
};

export default EditMemberFormModal;
