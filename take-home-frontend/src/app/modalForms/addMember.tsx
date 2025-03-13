import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Modal from "../components/modal";

import {
  Form,
  FormHeading,
  FormFooter,
  FormButton,
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
import { addUserRequest } from '@/store/userSplice';


interface IModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface IUserForm {
  user_name: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}

interface IAddUserFormErrors {
  user_name?: string;
  first_name?: string;
  last_name?: string;
  date_of_birth?: string;
}

interface IAddUserFormState {
  form: IUserForm;
  formErrors: IAddUserFormErrors;
}

const AddNewMemberModalForm: React.FC<IModalFormProps> = ({
  isOpen, onClose
}) => {
  const [formState, setFormState] = React.useState<IAddUserFormState>({
    form: {
      user_name: "",
      first_name: "",
      last_name: "",
      date_of_birth: "",
    },
    formErrors: {}
  });

  const [isUserAdded, setIsUserAdded] = React.useState<boolean>(false);
  const [isUserAddFailed, setIsUserAddFailed] = React.useState<boolean>(false);

  const form = formState.form;
  const formErrors = formState.formErrors;

  const dispatch = useDispatch();

  const addUserLoadingState = useSelector((state: RootState) => state.user.loading.post);

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
      dispatch(addUserRequest({...form}));
    }
  };

  const handleResetState = () => {
    setFormState({
      form: {
        user_name: "",
        first_name: "",
        last_name: "",
        date_of_birth: "",
      },
      formErrors: {}
    });
    setIsUserAdded(false);
  };

  React.useEffect(() => {
    if (addUserLoadingState.isLoading === false && addUserLoadingState.isSucceeded === true) {
      setIsUserAdded(true);
    }
    else if (addUserLoadingState.isLoading === false && addUserLoadingState.isSucceeded === false) {
      setIsUserAddFailed(true);
    }
  }, [addUserLoadingState.isLoading]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <>
        {isUserAdded ? (
          <MessageContainer>
            <MessageImage src="/successMessageImage.png" />
            <MessageText>Team member successfully added.</MessageText>
            <ButtonRow>
              <BlackButton onClick={handleResetState}>Add another member</BlackButton>
              <TextButton onClick={onClose}>View all team members</TextButton>
            </ButtonRow>
          </MessageContainer>
        ): (
          <>
            {isUserAddFailed ? (
              <MessageContainer>
                <MessageText>Unable to create new member</MessageText>
                <ButtonRow>
                  <TextButton onClick={onClose}>Exit</TextButton>
                </ButtonRow>
              </MessageContainer>
            ): (
              <>
                <FormHeading>Add Team Member</FormHeading>
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
                    <FormButton type="submit" color="#1A1B18">Add Member</FormButton>
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

export default AddNewMemberModalForm;
