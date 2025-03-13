import styled from 'styled-components';

export const TableContainer = styled.div`
  display: relative;
  justify-content: center;
  align-items: center;
  padding: 16px 12px;
  background-color: #EDEDEC;
  width: 100%;
`;

export const StyledTable = styled.table`
  display: table;
  width: 100%;
  border-radius: 8px;
  border-spacing: 0;
`

export const TableHead = styled.thead`
  background-color: #FFFFFF;
  border-radius: 8px;
  padding-left: 4px;
  padding-right: 4px;
  width: 100%;
  color: #2c747e;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  font-family: 'Manrope';
  letter-spacing: 8%;
  vertical-align: middle;
  text-transform: uppercase;
`;

export const TableRow = styled.tr`
  width: 100%;

  &:first-child td:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &:last-child td:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const TableCell = styled.td`
  position: relative;
  padding: 12px 8px;
  font-family: 'Manrope';
`;

export const TableBody = styled.tbody`
  color: #44463f;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  vertical-align: middle;
`;

export const DetailsButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const DetailsButton = styled.button`
  border: none;
  box-sizing: border-box;
  &:active {
    background-color: #BFE7EE;
    padding: 4px;
    border-radius: 8px;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 2px solid #585B52;
  padding: 16px;
  border-radius: 8px;
  z-index: 1;
  width: 100%;
  min-width: 154px;
`;

export const DropdownOption = styled.button`
  background: none;
  border: none;
  padding: 0;
  text-align: left;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #44463F;
  width: 100%;
`;

export const DropdownDeleteOption = styled(DropdownOption)`
  margin-top: 16px;
  color: #CC1C1C;
`;
