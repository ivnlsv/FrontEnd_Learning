import React from "react";
import { useParams, useNavigate } from "react-router-dom";
//import {Button} from "../../shared/buttons/button/button";
//import {IconRemove} from "../../shared/icons/icon-remove";
import { useTasks } from "../../../hooks/use-task";
import { useEffect, useState } from "react";
//import Scrollbars from "react-custom-scrollbars-2";
import {
  CardBlock,
  CardBody,
  CardTitleBlock,
  CardButton,
  CardTitle,
  CardNoDescription,
  CardFooter,
  CardFooterButton,
} from "./Card.styled";
import { IconRemove } from "../../../assets/icons/icon-remove";

export const Card = () => {
  const navigate = useNavigate();
  const { getTaskById, updateTask } = useTasks();
  const { cardId } = useParams();
  const [task, setTask] = useState();

  useEffect(() => {
    if (cardId) {
      setTask(getTaskById(cardId));
    }
  }, [cardId, getTaskById]);

  const navigateBack = () => navigate(-1);

  return (
    <CardBlock>
      {task && (
        <CardBody>
          <CardTitleBlock>
            <CardTitle>{task.name}</CardTitle>
            <CardButton className="button-close" onClick={navigateBack}>
              <IconRemove />
            </CardButton>
          </CardTitleBlock>
          
            <textarea
              onChange={(e) =>
                setTask({
                  ...task,
                  description: e.target.value,
                })
              }
              value={task.description}
            />
          {task.description ? '' : (
            <CardNoDescription>This task has no description</CardNoDescription>
          )}

          <CardFooter>
            <CardFooterButton
              onClick={() => {
                updateTask(task);
                navigateBack();
              }}
            >
              Save Card
            </CardFooterButton>
          </CardFooter>
        </CardBody>
      )}
    </CardBlock>
  );
};
