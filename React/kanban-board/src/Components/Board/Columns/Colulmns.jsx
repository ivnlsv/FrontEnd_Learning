import {
  ColumnBlock,
  ColumnBody,
  ColumnFooter,
  ColumnFooterButton,
  ColumnHeader,
  ColumnItemSelect,
  ColumnWrapper,
} from "./Columns.styled";

import { useState } from "react";
import { Card } from "./Card/Card";
import { useTasks } from "../../../hooks/use-task";
import Scrollbars from "react-custom-scrollbars-2";

export const Columns = (props) => {
  const [isNewTaskInputVisible, setIsNewTaskInputVisible] = useState(false);
  const [inputCardName, setInputCardName] = useState();

  const [isNewTaskSelectVisible, setIsNewTaskSelectVisible] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(undefined);

  const {
    getTasksByState,
    getTasksByExcludedState,
    addTask,
    moveTask,
    removeTask,
  } = useTasks();

  const tasks = getTasksByState(props.state);
  const hasTasks = tasks.length > 0;

  const onInputCard = (e) => {
    setInputCardName(e.target.value);
  };

  return (
    <ColumnBlock>
      <ColumnHeader>{props.name}</ColumnHeader>
      <ColumnWrapper>
        <ColumnBody>
          {hasTasks && (
            <Scrollbars autoHide autoHeight>
              {tasks.map((task) => (
                <Card
                  key={task.id}
                  id={task.id}
                  name={task.name}
                  onRemove={(id) => {
                    removeTask(id);
                  }}
                />
              ))}
            </Scrollbars>
          )}

          {isNewTaskInputVisible && (
            <div>
              <textarea name="text" onInput={onInputCard} />
            </div>
          )}

          {isNewTaskSelectVisible && (
            <ColumnItemSelect
              onChange={(e) => setSelectedTaskId(e.target.value)}
            >
              {getTasksByExcludedState(props.state).map((task) => (
                <option key={task.id} value={task.id}>
                  {task.name}
                </option>
              ))}
            </ColumnItemSelect>
          )}
        </ColumnBody>
        <ColumnFooter>
          {!isNewTaskInputVisible && !isNewTaskSelectVisible && (
            <button
              onClick={() =>
                props.state === "backlog"
                  ? setIsNewTaskInputVisible(true)
                  : setIsNewTaskSelectVisible(true)
              }
            >
              Add card
            </button>
          )}
          {(isNewTaskInputVisible || isNewTaskSelectVisible) && (
            <ColumnFooterButton
              onClick={() => {
                if (props.state === "backlog") {
                  setIsNewTaskInputVisible(false);
                  addTask(inputCardName);
                  setInputCardName(undefined);
                } else {
                  setIsNewTaskSelectVisible(false);
                  moveTask(selectedTaskId, props.state);
                }
              }}
            >
              Submit
            </ColumnFooterButton>
          )}
        </ColumnFooter>
      </ColumnWrapper>
    </ColumnBlock>
  );
};
