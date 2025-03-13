'use client';

import React from 'react';
import styled from 'styled-components';

import Icon from '../icon';

interface ITableRow {
  columns: ITableCell[];
}

interface ITableCell {
  data: React.ReactNode | string | number;
  columnSize?: number;
}

interface ITableProps {
  headingColumns: string[];
  rows: ITableRow[];
}

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 12px;
  background-color: #EDEDEC;
  width: 100%;
`;

const StyledTable = styled.table`
  display: table;
  width: 100%;
  border-radius: 8px;
  border-spacing: 0;
`

const TableHead = styled.thead`
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

const TableRow = styled.tr`
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

const TableCell = styled.td`
  padding: 12px 8px;
  font-family: 'Manrope';
`;

const TableBody = styled.tbody`
  color: #44463f;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  vertical-align: middle;
`;

const DetailsButton = styled.button`
  background-color: #BFE7EE;
  padding: 4px;
  border-radius: 8px;
`;

function Table<T>(props: ITableProps) {
  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <TableRow>
            {props.headingColumns.map((heading, i) => (
              <TableCell key={i}>{heading}</TableCell>
            ))}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
        {props.rows.map((row, i) => (
          <TableRow key={`row-${i}`}>
            {row.columns ? row.columns.map((col, k) => (
              <TableCell key={`row-${i}-cell-${k}`}>
                {col.data}
              </TableCell>
            )): 'No data available'}
            <TableCell>
              <DetailsButton>
                <Icon src="/options-icon.svg" height={24} width={24} />
              </DetailsButton>
            </TableCell>
          </TableRow>
        ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}

export default Table;
