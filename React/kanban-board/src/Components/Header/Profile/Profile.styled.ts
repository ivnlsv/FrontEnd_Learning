import styled from "styled-components";

export const ProfileBlock = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
export const ProfileArrow = styled.div<{ rotate: boolean }>`
  overflow: hidden;
  ${({ rotate }) => rotate && `transform: scaleY(-1)`};
`;
export const ProfileMenu = styled.div`
  position: fixed;
  top: 55px;
  right: 16px;
  min-width: 120px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 4px;
  padding: 8px 12px;
  z-index: 999;
  .cube {
    position: absolute;
    width: 11px;
    height: 11px;
    background-color: #fff;
    transform: rotate(45deg);
    top: -6px;
    right: 38px;
  }
`;
