'use client'

import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #F5F5F4;
`;

const NavbarContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
`;

const CompanyTitle = styled.div`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0%;
  vertical-align: middle;
`;

const UserInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #1A1B18;
  text-align: right;
`;

const UserRole =styled.span`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #585B52;
  text-align: right;
`;

const UserIcon = styled.div`
  border: 2px solid #2C747E;
  background-color: #dbf1f4;
  height: 40px;
  width: 40px;
  color: #2C747E;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope';
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: 0%;
  vertical-align: middle;
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarContent>
        <CompanyTitle>Company Name</CompanyTitle>
        <UserInformation>
          <UserProfile>
            <UserName>Cate Blanchett</UserName>
            <UserRole>ACME Incorporated</UserRole>
          </UserProfile>
          <UserIcon>CB</UserIcon>
        </UserInformation>
      </NavbarContent>
    </NavbarContainer>
  )
}
