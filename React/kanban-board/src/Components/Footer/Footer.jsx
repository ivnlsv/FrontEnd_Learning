import React from "react";
import { FooterBlock, FooterInfo, FooterTasks } from "./Footer.styled";
import { useTasks } from "../../hooks/use-task";

export const Footer = () => {
  const { getActiveTaskCount, getFinishedTaskCount } = useTasks();
  return (
    <FooterBlock>
      <FooterTasks>
        <span>Active tasks: {getActiveTaskCount()}</span>
        <span>Finished tasks: {getFinishedTaskCount()}</span>
      </FooterTasks>
      <FooterInfo>
        <span>Kanban board by</span>
        <span>Name</span>
        <span>Year</span>
      </FooterInfo>
    </FooterBlock>
  );
};
