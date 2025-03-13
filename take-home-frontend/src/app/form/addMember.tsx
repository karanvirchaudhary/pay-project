import React from "react";

import styled from 'styled-components';

interface IAddUserForm {
  userName: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

interface IAddUserFormErrors {
  userName?: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
}

interface IAddUserFormState {
  form: IAddUserForm;
  formErrors: IAddUserFormErrors;
}

const FormHeading = styled.h1`
  font-family: 'Libre Baskerville';
  font-size: 32px;
  font-weight: 400;
  line-height: 100px;
  letter-spacing: -1px;
`;

const Form = styled.form`
  padding: 0 48px;
  gap: 20px;
  flex-direction: column;
  width: 100%;
`;

const FormFooter = styled.div`
  display: flex;
  padding: 16px;
  width: 100%;
`;

const FormButton = styled.button`
  width: 100%;
  background-color: #1a1b18;
  color: white;
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  vertical-align: middle;
  padding: 16px 12px;
`;

export default function AddUserForm() {
  const [formState, setFormState] = React.useState<IAddUserFormState>({
    form: {
      userName: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
    },
    formErrors: {}
  });

  const handleChange = (key: keyof IAddUserForm, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [key]: value,
      }
    }));
  };

  const form = formState.form;

  const validateForm = () => {
    let formErrors = {
      userName: !form.userName ? "Please enter a username" : undefined,
      firstName: !form.userName ? "Please enter the first name" : undefined,
      lastName: !form.lastName ? "Please enter the last name" : undefined,
      dateOfBirth: !form.dateOfBirth ? "Please enter the date of birth for this member" : undefined,
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
      // Dispatch action
    }
  }

  return (
    <>
      <FormHeading>Add Team Member</FormHeading>
      <Form onSubmit={handleSubmit}>
        {/* <Label>
          Name:
          <Input type="text" name="name" value={formData.name} onChange={handleChange} />
          {formErrors.name && <ErrorMessage>{formErrors.name}</ErrorMessage>}
        </Label>

        <Label>
          Email:
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          {formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}
        </Label>

        <Label>
          Role:
          <Select name="role" value={formData.role} onChange={handleChange}>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </Select>
        </Label> */}

        <FormFooter>
          <FormButton type="submit" color="#1A1B18">Add New Member</FormButton>
        </FormFooter>
    </Form>
    </>
  );
}
