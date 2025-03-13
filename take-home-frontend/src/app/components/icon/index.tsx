'use client'

import React from "react";
import styled from "styled-components";

interface IIconProps {
  src: string;
  height: number;
  width: number;
}

const StyledIcon = styled.img<{height: number, width: number}>`
  height: ${({ height }) => (height ? `${height}px` : "24px")};
  width: ${({ width }) => (width ? `${width}px` : "24px")};
`;

export default function Icon({src, height, width}: IIconProps) {
  return (
    <StyledIcon src={src} height={height} width={width} />
  )
}
