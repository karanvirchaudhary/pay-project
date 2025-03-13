'use client'

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Button from "./components/button";
import Icon from "./components/icon";
import Navbar from './components/navbar';
import Table from './components/table';
import SideMenu from './components/sideMenu';

import AddNewMemberModalForm from './modalForms/addMember';

import type { RootState } from '@/store/store';
import type { IColumn } from './components/table';
import type { IUser } from '@/store/types';

import { getUsersRequest } from '@/store/userSplice';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const PageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const PageLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const PageContentContainer = styled.div`
  display: flex;
  padding: 32px;
  width: 100%;
  flex-direction: column;
`;

const PageHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const PageTitleAndSubtitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  font-family: 'Libre Baskerville';
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: -1px;
  vertical-align: middle;
`;

const PageSubtitle = styled.span`
  font-family: 'Manrope';
  color: #44463F;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0%;
  vertical-align: middle;
`;

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const getUsersLoadingState = useSelector((state: RootState) => state.user.loading.gets);

  React.useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  const userColumns: IColumn<IUser>[] = [
    { key: "id", label: "ID", width: "5%"},
    { key: "first_name", label: "First Name", width: "20%" },
    { key: "last_name", label: "Last Name", width: "20%"},
    { key: "user_name", label: "Username", width: "20%"},
    { key: "date_of_birth", label: "Date of Birth", width: "20%"},
  ];

  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = React.useState(false);

  const renderModals = () => (
    <>
      {isAddMemberModalOpen && (
        <AddNewMemberModalForm
          isOpen={isAddMemberModalOpen}
          onClose={() => setIsAddMemberModalOpen(false)}
        />
      )}
    </>
  );

  return (
    <>
      {renderModals()}
      <PageContainer>
        <PageContent>
          <Navbar />
          <PageLayout>
            <SideMenu />
            <PageContentContainer>
              <PageHeader>
                <PageTitleAndSubtitle>
                  <PageTitle>Team Members</PageTitle>
                  <PageSubtitle>Manage your team members below.</PageSubtitle>
                </PageTitleAndSubtitle>

                <Button onClick={() => setIsAddMemberModalOpen(true)}>
                  <Icon src="/add-circle.svg" height={20} width={20}/>
                  <span>Add New Member</span>
                </Button>
              </PageHeader>
              {getUsersLoadingState.isLoading && (
                <span>Loading</span>
              )}

              {getUsersLoadingState.isLoading === false && getUsersLoadingState.isSucceeded === true && (
                <Table columnHeadings={userColumns} data={users} />
              )}
            </PageContentContainer>
          </PageLayout>
        </PageContent>
      </PageContainer>
    </>
  );
}
