import styled from "styled-components";
import { device } from "../../Models/breakpoints";

export const FooterBlock = styled.div`
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
  }
`;
export const FooterTasks = styled.div`
  span:last-of-type {
    margin-left: 24px;
  }
  @media only screen and ${device.xs} {
    flex-grow: 1;
  }
`;
export const FooterInfo = styled.div`
  display: flex;
  gap: 2px;

  span:nth-child(n + 2):before {
    content: "<";
  }
  span:nth-child(2):after {
    content: ">,";
  }
  span:nth-child(3):after {
    content: ">";
  }
  @media only screen and ${device.xs} {
    display: none;
  }
`;
