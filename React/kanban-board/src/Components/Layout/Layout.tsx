import { LayoutBlock } from "./Layout.styled";
import { TaskProvider } from "../../hooks/task-provider";

export const Layout = (props: any) => {
  return (
    <TaskProvider>
      <LayoutBlock>{props.children}</LayoutBlock>
    </TaskProvider>
  );
};
