//import React from 'react';
import { CardBlock } from "./Card.styled";
import { useNavigate } from "react-router-dom";
//import { IconRemove } from "../../../../assets/icons/icon-remove";

export const Card = (props) => {
  const navigate = useNavigate();
  return (
    <CardBlock onClick={() => navigate(`/tasks/${props.id}`)}>
      <span>{props.name}</span>
    </CardBlock>
  );
};
