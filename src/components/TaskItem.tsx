import "../styles/task.scss"

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
    <div className="task-item">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
        />
        <span className={task.completed ? "completed" : ""}>
          {task.title}
        </span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
