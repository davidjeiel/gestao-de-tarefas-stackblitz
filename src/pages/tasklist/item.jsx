import {
  Col,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
  Row,
  Button as BtnBoot,
} from 'react-bootstrap';
import { Button, Input, OcultInput } from '../../styles';
import React, { useState } from 'react';

export default function Item(params) {
  const [task, setTask] = useState();
  const [check, setCheck] = useState(false);

  const handleValue = (insert) => {
    setTask(insert);
    console.debug(task);
  };

  const enterClick = (key) => {
    if (key === 'Enter') {
      addTask();
    }
  };

  const handleSaveTask = () => {
    console.debug(`Saving task: ${task}`);
  };

  const handleCheck = () => {
    setCheck(!check);
    console.debug(check);
  };

  return (
    <InputGroup className="">
      <InputGroup.Checkbox
        id={'task-' + params.id}
        onChange={() => handleCheck()}
      />
      <FormControl
        value={task}
        width="100%"
        onChange={(e) => handleValue(e.target.value)}
        placeholder="Write your task"
        onKeyDown={() => enterClick(event.key)}
      />
      <BtnBoot
        size="sm"
        variant="secondary"
        style={{ marginTop: '3%' }}
        onClick={() => handleSaveTask()}
      >
        <i className="bx bxs-send"></i>
      </BtnBoot>
    </InputGroup>
  );
}
