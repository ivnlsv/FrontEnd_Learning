import { BoardBlock } from "./Board.styled";
import { Columns } from "./Columns/Colulmns";
import { useTasks } from "../../hooks/use-task";

export const Board = () => {
  const { states } = useTasks();
  return (
    <BoardBlock>
      {states.map((state) => (
        <Columns key={state.id} name={state.name} state={state.state} />
      ))}
    </BoardBlock>
  );
};
