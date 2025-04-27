import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

type TaskFormProps = {
  onAdd: (title: string) => void;
};

const TaskForm = ({ onAdd }: TaskFormProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new task"
      />
      <Button type="submit" variant="primary">Add Task</Button>
    </form>
  );
};

export default TaskForm;
