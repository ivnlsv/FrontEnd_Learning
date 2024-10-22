import styled from "styled-components";
import { device } from "../../Models/breakpoints";

export const LayoutBlock = styled.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0079bf;
  @media only screen and ${device.xs} {
    height: auto;
  }
`;
export const LayoutMain = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 25px 19px;
`;
