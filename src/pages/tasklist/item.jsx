import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { Button } from '../../styles';
import React, { useState } from 'react';

export default function Item(params) {
  const [task,  setTask ] = useState();
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
      <Button size="sm" variant="secondary" onClick={() => handleSaveTask()}>
        <i className="bx bxs-send"></i>
      </Button>
    </InputGroup>
  );
}
