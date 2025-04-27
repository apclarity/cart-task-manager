type TaskItemProps = {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  onToggle: () => void;
  onDelete: () => void;
};

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  return (
    <div >
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
        />
        <span>
          {task.title}
        </span>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
