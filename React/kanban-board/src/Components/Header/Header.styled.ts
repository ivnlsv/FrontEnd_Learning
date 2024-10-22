import styled from "styled-components";
import { device } from "../../Models/breakpoints";
export const HeaderBlock = styled.div`
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #0067a3;
  color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  @media only screen and ${device.xs} {
    flex-shrink: 0;
    justify-content: flex-end;
  }
`;
export const HeaderTitle = styled.h1`
  font-size: 28px;
  font-weight: normal;
  @media only screen and ${device.xs} {
    display: none;
  }
`;
