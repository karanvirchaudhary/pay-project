'use client';

import React from 'react';
import { useSelector } from "react-redux";

import Icon from '../icon';

import EditMemberFormModal from '@/app/modalForms/editMemberModal';
import DeleteMemberModalForm from '@/app/modalForms/deleteMember';

import {
  TableContainer,
  StyledTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  DetailsButtonContainer,
  DetailsButton,
  Dropdown,
  DropdownOption,
  DropdownDeleteOption
} from './styles';

import type { IUser } from '@/store/types';

export interface IColumn<T> {
  key: keyof T;
  label: string;
}
interface ITableProps<T> {
  data: T[];
  columnHeadings: IColumn<T>[];
}

function Table<T, >(props: ITableProps<T>) {
  const [selectedUserId, setSelectedUserId] = React.useState<number | null>(null);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = React.useState<boolean>(false);
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = React.useState<boolean>(false);
  const [activeRow, setActiveRow] = React.useState<number | null>(null);

  const handleOpenDropdown = (index: number) => {
    setActiveRow(activeRow === index ? null : index);
  };

  React.useEffect(() => {
    if (activeRow !== null) {
      const matchingRow = props.data.at(activeRow) as IUser;
      setSelectedUserId(matchingRow.id);
    }
  }, [activeRow]);

  const handleManageMember = () => {
    setIsEditUserModalOpen(true);
  };

  const handleDeleteMember = () => {
    setIsDeleteUserModalOpen(true);
  }

  const renderModals = () => (
    <>
      {isEditUserModalOpen && selectedUserId !== null && (
        <EditMemberFormModal
          isOpen={isEditUserModalOpen}
          onClose={() => setIsEditUserModalOpen(false)}
          userId={selectedUserId}
        />
      )}

      {isDeleteUserModalOpen && selectedUserId !== null && (
        <DeleteMemberModalForm
          isOpen={isDeleteUserModalOpen}
          onClose={() => setIsDeleteUserModalOpen(false)}
          userId={selectedUserId}
        />
      )}
    </>
  );

  return (
    <>
      {renderModals()}
      <TableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              {props.columnHeadings.map((colHeading, i) => (
                <TableCell key={String(colHeading.key)}>
                  {colHeading.label}
                </TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((dataField, j) => (
              <TableRow key={`${j}`}>
                {props.columnHeadings.map((col, k) => (
                  <TableCell key={`row-${j}-${String(col.key)}`}>
                    {String(dataField[col.key])}
                  </TableCell>
                ))}

                <TableCell>
                  <DetailsButtonContainer>
                    <DetailsButton onClick={() => handleOpenDropdown(j)}>
                      <Icon src="/options-icon.svg" height={24} width={24} />
                    </DetailsButton>
                    {activeRow === j && (
                      <Dropdown>
                        <DropdownOption
                          onClick={() => handleManageMember()}
                        >
                          Manage member
                        </DropdownOption>
                        <DropdownDeleteOption
                          onClick={() => handleDeleteMember()}
                        >
                          Delete
                        </DropdownDeleteOption>
                      </Dropdown>
                    )}
                  </DetailsButtonContainer>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </>
  );
}

export default Table;
