import styled from "styled-components";

export const FormHeading = styled.h1`
  font-family: 'Libre Baskerville';
  font-size: 32px;
  font-weight: 400;
  line-height: 100px;
  letter-spacing: -1px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormFooter = styled.div`
  display: flex;
  padding: 16px;
  width: 100%;
  margin-top: 172px;
  border-top: 1px solid #dfe0dc;
`;

export const FormButton = styled.button`
  width: 100%;
  background-color: #F5B588;
  border: none;
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  vertical-align: middle;
  padding: 16px 12px;
  border-radius: 8px;
`;

export const FormButtonBlack = styled(FormButton)`
  background-color: #1A1B18;
  color: white;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 8px;
  padding: 12px 16px;
  border: 2px solid #B4B5B2;
  min-height: 32px;
  height: 100%;
  max-height: 56px;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #44463F;

  &::placeholder {
    color: #B4B5B2;
  }

  &:focus {
    border-color:#5CB1BD !important;
  }

  &::-webkit-datetime-edit-month-field:focus,
  &::-webkit-datetime-edit-day-field:focus,
  &::-webkit-datetime-edit-year-field:focus {
    background-color: #DBF1F4;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 48px;
  gap: 20px;
`;

export const MessageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const MessageImage = styled.img`
  height: 268px;
  width: 302px;
  object-fit: cover;
  object-position: center;
`;

export const MessageText = styled.h1`
  font-family: 'Libre Baskerville';
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: -4%;
  text-align: center;
  vertical-align: middle;
  margin-top: 24px;
`;

export const ButtonRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  gap: 24px;
`;

export const BlackButton = styled(FormButton)`
  background-color: #1A1B18;
  color: white;
`;

export const TextButton = styled.button`
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  vertical-align: middle;
  border: none;
  background: none;
  color: #2C747E;
`;

export const DeleteMemberContainer= styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
