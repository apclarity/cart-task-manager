import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import { useAppSelector, useAppDispatch } from "../app/store";
import { addTask, toggleTask, removeTask } from "../features/tasks/taskSlice";
import "../styles/task.scss"

const Tasks = () => {
  const tasks = useAppSelector((state) => state.tasks.list);
  const dispatch = useAppDispatch();
  

  return (
    <div className="tasks-container">
      <h2>My Tasks</h2>
      
      <TaskForm onAdd={(title) => dispatch(addTask(title))} />

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task}
              onToggle={() => dispatch(toggleTask(task.id))}
              onDelete={() => dispatch(removeTask(task.id))}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tasks;
