import styled from "styled-components";

export const CardBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 24px 40px;
`;
export const CardBody = styled.div`
  padding: 10px;
  textarea {
    display: inline-block;
    margin-top: 24px;
    width: 100%;
    height: 100%;
    outline: none;
    border: 1px solid #ebecf0;
    border-radius: 5px;
    padding: 6px 12px;
    min-height: 48px;
    cursor: pointer;
    &:focus {
      outline: 1px solid black;
    }
  }
`;
export const CardTitleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;
export const CardTitle = styled.div`
  font-size: 24px;
  font-weight: normal;
`;
export const CardNoDescription = styled.span`
  font-size: 18px;
`;
export const CardButton = styled.button`
  width: 32px;
  height: 32px;
  display: absolute;
  background-color: #fff;
  top: 12px;
  right: 12px;
  border: none;
  cursor: pointer;
`;
export const CardFooter = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
`;
export const CardFooterButton = styled.div`
  background-color: #0079bf;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 120px;
  height: 29px;
  padding: 6px 20px;
  cursor: pointer;
`;
