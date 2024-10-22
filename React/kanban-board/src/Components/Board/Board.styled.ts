import styled from "styled-components";
import { device } from "../../Models/breakpoints";
export const BoardBlock = styled.div`
  display: flex;
  gap: 24px;
  @media only screen and ${device.md} {
    flex-flow: row wrap;
  }
  @media only screen and ${device.xs} {
    align-items: space-around;
  }
`;
