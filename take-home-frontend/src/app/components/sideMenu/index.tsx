'use client'

import React from "react";
import styled from "styled-components";

const SideMenuContainer = styled.div`
  display: flex;
  background: #F8F9F7;
  width: 20%;
  padding: 20px 24px;
  min-height: 100vh;
  max-width: 232px;
`;

const SideMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-height: 558px;
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  gap: 28px;
`;

const Link = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 208px;
  justify-content: space-between;
  font-family: 'Manrope';
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: 0%;
`;

const LinkTextAndIcon = styled.div`
  display: flex;
  gap: 8px;
`;

const LinkIcon = styled.img`
  height: 24px;
  width: 24px;
`;

const DropdownIcon = styled.img`
  height: 16px;
  width: 16px;
`;

const PointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #777A71;
  padding: 12px 16px 14px 16px;
  border-radius: 12px;
  width: 100%;
  max-width: 208px;
  box-sizing: border-box;
  box-shadow: 4px 4px 0px 0px #F5B588;
`;

const PointsContainerText = styled.span`
  font-family: 'Manrope';
  font-weight: 500;
  line-height: 20px;
  font-size: 14px;
  letter-spacing: 0%;
  vertical-align: middle;
`;

const PointsText = styled.span`
  font-family: 'Libre Baskerville';
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -2%;
  vertical-align: middle;
`;

const RewardsIcon = styled.img`
  height: 32px;
  width: 32px;
`;

const ExploreRewardsButton = styled.button`
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  width: 100%;
  padding: 0;
  color: #2C747E;
  font-family: 'Manrope';
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: 0%;
  vertical-align: middle;
`;

const RightToggleIcon = styled.img`
  height: 16px;
  width: 16px;
`;

export default function SideMenu() {
  return (
    <SideMenuContainer>
      <SideMenuContent>
        <Links>
          <Link>
            <LinkTextAndIcon>
              <LinkIcon src="/sideMenuIcons/dashboard.svg" />
              <span>Dashboard</span>
            </LinkTextAndIcon>
          </Link>

          <Link>
            <LinkTextAndIcon>
              <LinkIcon src="/sideMenuIcons/teamMembers.svg" />
              <span>Team Members</span>
            </LinkTextAndIcon>

            <DropdownIcon src="/round-alt-arrow-down.svg" />
          </Link>

          <Link>
            <LinkTextAndIcon>
              <LinkIcon src="/sideMenuIcons/rewards.svg" />
              <span>Rewards</span>
            </LinkTextAndIcon>

            <DropdownIcon src="/round-alt-arrow-down.svg" />
          </Link>
        </Links>

        <PointsContainer>
          <RewardsIcon src="/sideMenuIcons/rewards.svg" />
          <PointsContainerText>You have</PointsContainerText>
          <PointsText>4500 points</PointsText>
          <ExploreRewardsButton>
            <span>Explore Rewards</span>
            <RightToggleIcon src="/round-alt-arrow-right-green.svg" />
          </ExploreRewardsButton>
        </PointsContainer>
      </SideMenuContent>
    </SideMenuContainer>
  )
}
