import styled from "styled-components";

export const ColumnBlock = styled.div`
  width: 282px;
  min-height: 210px;
`;
export const ColumnHeader = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 48px;
  color: #ebecf0;
  padding-left: 12px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #ebecf0;
  color: black;
  font-size: 18px;
`;
export const ColumnWrapper = styled.div`
  background-color: #ebecf0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;
export const ColumnBody = styled.div`
  padding: 0 12px 0 12px;

  textarea {
    width: 100%;
    border: none;
    outline: none;
    border-radius: 5px;
    min-height: 15px;
    resize: none;
    padding: 5px;
  }
`;
export const ColumnItemSelect = styled.select`
  width: 258px;
  height: 35px;
  padding: 8px 12px;
  position: relative;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
`;

export const ColumnFooter = styled.div`
  padding: 12px 12px;
  button {
    border: none;
    color: #5e6c84;
    font-size: 18px;
    cursor: pointer;
    &::before {
      content: "+";
      width: 14px;
      height: 14px;
      padding-right: 3px;
    }
  }
`;
export const ColumnFooterButton = styled.div`
  background-color: #0079bf;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 102px;
  height: 29px;
  padding: 6px 20px;
  cursor: pointer;
`;
